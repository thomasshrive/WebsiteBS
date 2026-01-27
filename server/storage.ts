import { type User, type InsertUser, type InsertOnboarding, type OnboardingSubmission, type ContactFormData } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createOnboardingSubmission(data: InsertOnboarding): Promise<OnboardingSubmission>;
  getOnboardingSubmissions(): Promise<OnboardingSubmission[]>;
  saveContactMessage(data: ContactFormData): Promise<{ id: string }>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private onboardingSubmissions: Map<string, OnboardingSubmission>;
  private contactMessages: Map<string, ContactFormData & { id: string; createdAt: Date }>;

  constructor() {
    this.users = new Map();
    this.onboardingSubmissions = new Map();
    this.contactMessages = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createOnboardingSubmission(data: InsertOnboarding): Promise<OnboardingSubmission> {
    const id = randomUUID();
    const submission: OnboardingSubmission = {
      id,
      ...data,
      submittedAt: new Date(),
    };
    this.onboardingSubmissions.set(id, submission);
    return submission;
  }

  async getOnboardingSubmissions(): Promise<OnboardingSubmission[]> {
    return Array.from(this.onboardingSubmissions.values());
  }

  async saveContactMessage(data: ContactFormData): Promise<{ id: string }> {
    const id = randomUUID();
    const message = {
      id,
      ...data,
      createdAt: new Date(),
    };
    this.contactMessages.set(id, message);
    return { id };
  }
}

export const storage = new MemStorage();
