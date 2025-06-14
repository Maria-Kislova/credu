import { initTRPC } from '@trpc/server';

type Lesson = {
  nick: string; // URL-friendly identifier
  name: string; // Display name
  description: string;
  category: 'programming' | 'design' | 'marketing' | 'devops';
  duration: string; // Human-readable duration
  level: 'beginner' | 'intermediate' | 'advanced';
  thumbnail?: string; // Optional image URL
};

const lessons: Lesson[] = [
  {
    nick: 'react-fundamentals',
    name: 'React Fundamentals',
    description:
      'Learn core React concepts including components, state, and props. Build your first interactive web application with modern JavaScript.',
    category: 'programming',
    duration: '2h 45m',
    level: 'beginner',
    // thumbnail: '/thumbnails/react-fundamentals.jpg'
  },
  {
    nick: 'figma-for-devs',
    name: 'Figma for Developers',
    description:
      'Bridge the design-dev gap! Learn how to interpret Figma designs and collaborate effectively with designers.',
    category: 'design',
    duration: '1h 30m',
    level: 'beginner',
  },
  {
    nick: 'growth-hacking',
    name: 'Growth Hacking for SaaS',
    description:
      'Proven marketing strategies to accelerate user acquisition and retention for tech products.',
    category: 'marketing',
    duration: '3h 15m',
    level: 'intermediate',
  },
  {
    nick: 'docker-essentials',
    name: 'Docker Essentials',
    description:
      'Containerize your applications and streamline deployments with hands-on Docker tutorials.',
    category: 'devops',
    duration: '2h 10m',
    level: 'intermediate',
    // thumbnail: '/thumbnails/docker-essentials.jpg'
  },
  {
    nick: 'ux-principles',
    name: 'UX Design Principles',
    description:
      'Master user-centered design thinking to create intuitive digital experiences.',
    category: 'design',
    duration: '2h 00m',
    level: 'beginner',
  },
];

// const lessons = [
//   {
//     nick: `cool-idea-nick-1`,
//     name: `Idea 1`,
//     description: `Description of idea 1...`,
//   },
//   {
//     nick: `cool-idea-nick-2`,
//     name: `Idea 2`,
//     description: `Description of idea 2...`,
//   },
//   {
//     nick: `cool-idea-nick-3`,
//     name: `Idea 3`,
//     description: `Description of idea 3...`,
//   },
//   {
//     nick: `cool-idea-nick-4`,
//     name: `Idea 4`,
//     description: `Description of idea 4...`,
//   },
//   {
//     nick: `cool-idea-nick-5`,
//     name: `Idea 5`,
//     description: `Description of idea 5...`,
//   },
// ];

const trpc = initTRPC.create();

export const trpcRouter = trpc.router({
  getLessons: trpc.procedure.query(() => {
    return { lessons };
  }),
});

export type TrpcRouter = typeof trpcRouter;
