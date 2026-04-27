export type CameraPerspective = 
  | 'Cinematic Wide' 
  | 'Medium Close-up' 
  | 'POV' 
  | 'Tracking Shot' 
  | 'Drone / Aerial' 
  | 'Low Angle Hero' 
  | 'Macro Detail' 
  | 'Crane / Jib Shot';

export interface VideoPrompt {
  perspective: CameraPerspective;
  prompt: string;
}

export interface AnalysisResult {
  subject: string;
  lighting: string;
  environment: string;
  prompts: VideoPrompt[];
}
