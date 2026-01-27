import { pgTable, text, varchar, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id", { length: 36 }).primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).omit({
  id: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Onboarding submission schema
export const onboardingSubmissions = pgTable("onboarding_submissions", {
  id: varchar("id", { length: 36 }).primaryKey(),
  address: text("address").notNull(),
  buildingType: text("building_type").notNull(),
  yearBuilt: text("year_built").notNull(),
  heightBand: text("height_band").notNull(),
  numberOfUnits: integer("number_of_units").notNull(),
  hasLifts: boolean("has_lifts").notNull(),
  hasCommercialUnits: boolean("has_commercial_units").notNull(),
  email: text("email").notNull(),
  submittedAt: timestamp("submitted_at").defaultNow(),
});

export const insertOnboardingSchema = createInsertSchema(onboardingSubmissions).omit({
  id: true,
  submittedAt: true,
});

export type InsertOnboarding = z.infer<typeof insertOnboardingSchema>;
export type OnboardingSubmission = typeof onboardingSubmissions.$inferSelect;

// Extended building form schema with friendlier validation messages for frontend
export const buildingFormSchema = insertOnboardingSchema.extend({
  address: z.string().min(5, "Please enter a valid address"),
  buildingType: z.string().min(1, "Please select a building type"),
  yearBuilt: z.string().min(1, "Please select when the building was built"),
  heightBand: z.string().min(1, "Please select the building height"),
  numberOfUnits: z.number().min(1, "Please enter number of units"),
  email: z.string().email("Please enter a valid email address"),
});

export type BuildingFormData = z.infer<typeof buildingFormSchema>;

// Contact messages table
export const contactMessages = pgTable("contact_messages", {
  id: varchar("id", { length: 36 }).primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertContactSchema = createInsertSchema(contactMessages).omit({
  id: true,
  createdAt: true,
});

// Extended contact schema with friendlier validation for frontend
export const contactSchema = insertContactSchema.extend({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type InsertContact = z.infer<typeof insertContactSchema>;
export type ContactMessage = typeof contactMessages.$inferSelect;
export type ContactFormData = z.infer<typeof contactSchema>;
