export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  tags: string[];
  imageUrl: string;
  slug: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: 'dumbell' | 'video' | 'activity' | 'calendar';
  price?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  result: string;
  text: string;
  imageUrl: string;
}

export interface AIWorkoutResponse {
  tip: string;
}
