import { defineCollection, z } from 'astro:content';

// Academic Programs / Departments
const programs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    department: z.string().optional(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

// Faculty Members
const faculty = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    title: z.string(),
    department: z.string(),
    image: z.string().optional(),
    email: z.string().optional(),
    education: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

// News Articles
const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string().optional(),
    date: z.coerce.date(),
    author: z.string().optional(),
    image: z.string().optional(),
    category: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

// Events Calendar
const events = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    location: z.string().optional(),
    category: z.string().optional(),
    registrationUrl: z.string().optional(),
  }),
});

// Athletics / Sports Programs
const athletics = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    sport: z.string(),
    season: z.enum(['Fall', 'Winter', 'Spring']),
    description: z.string().optional(),
    image: z.string().optional(),
    coachName: z.string().optional(),
    coachEmail: z.string().optional(),
    level: z.enum(['Varsity', 'JV', 'Club']).default('Varsity'),
  }),
});

// FAQ
const faq = defineCollection({
  type: 'content',
  schema: z.object({
    question: z.string(),
    category: z.string().optional(),
    order: z.number().default(0),
  }),
});

// Testimonials (from students, parents, alumni)
const testimonials = defineCollection({
  type: 'content',
  schema: z.object({
    quote: z.string(),
    author: z.string(),
    role: z.string(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  programs,
  faculty,
  news,
  events,
  athletics,
  faq,
  testimonials,
};
