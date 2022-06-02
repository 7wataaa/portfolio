type WorkDescriptionType = {
  data: {
    title: string;
    summary: string;
    description: string;
    languages: string[];
    tags: string[];
    repository?: string;
    applicationURL?: string;
  };
};

export type { WorkDescriptionType };
