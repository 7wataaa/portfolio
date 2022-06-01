type CarouselContent = {
  main: React.ReactNode;
  thumbnail?: React.ReactNode;
};

type WorkCarouselType = {
  contents: CarouselContent[];
};

export type { WorkCarouselType };
