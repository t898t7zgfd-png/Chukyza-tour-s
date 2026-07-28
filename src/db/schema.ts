import { relations } from 'drizzle-orm';
import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  uid: text('uid').notNull().unique(), // Firebase Auth UID
  email: text('email').notNull(),
  name: text('name'),
  createdAt: timestamp('created_at').defaultNow(),
});

export const bookings = pgTable('bookings', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').references(() => users.id).notNull(),
  tourId: text('tour_id').notNull(),
  packageId: text('package_id'),
  date: text('date').notNull(),
  guests: integer('guests').notNull().default(1),
  vehicleType: text('vehicle_type'),
  status: text('status').notNull().default('confirmed'),
  notes: text('notes'),
  createdAt: timestamp('created_at').defaultNow(),
});

export const savedRoutes = pgTable('saved_routes', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').references(() => users.id).notNull(),
  tourId: text('tour_id').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});

export const usersRelations = relations(users, ({ many }) => ({
  bookings: many(bookings),
  savedRoutes: many(savedRoutes),
}));

export const bookingsRelations = relations(bookings, ({ one }) => ({
  user: one(users, {
    fields: [bookings.userId],
    references: [users.id],
  }),
}));

export const savedRoutesRelations = relations(savedRoutes, ({ one }) => ({
  user: one(users, {
    fields: [savedRoutes.userId],
    references: [users.id],
  }),
}));
