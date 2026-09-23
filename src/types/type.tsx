export type DifficultyLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export interface Exercise {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: DifficultyLevel;
  duration: number; // in minutes
  caloriesBurned: number;
  sets: number;
  reps: string; // string to allow ranges like "6-8" or "10-12"
  rating: number;
  description: string;
  instructions: string[];
}