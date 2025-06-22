const { PgTable, text, boolean, timestamp, serial } = require('drizzle-orm/pg-core');

const courseSchema = pgTable({
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    author: text('author'),
    tags: text('tags').array(),
    day: timestamp('date').defaultNow(),
    isPublished: boolean('is_published'), 

});

module.exports = courseSchema;