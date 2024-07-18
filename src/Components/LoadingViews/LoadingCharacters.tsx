import { Grid } from "@mantine/core";
import { Skeleton, SkeletonLine } from "keep-react";

export const LoadingCharacters = () => {
  return (
    <Grid gutter={{ base: 5, xs: "md", md: "xl", xl: 50 }}>
      <Grid.Col span={12} className="flex flex-wrap">
        <Skeleton className="w-full space-y-2.5 xl:max-w-md">
          <div className="">
            {Array.from({ length: 2 }).map((_, index) => (
              <SkeletonLine key={index} className="h-60 w-3/5 mx-2 mb-2" />
            ))}
          </div>
        </Skeleton>
        <Skeleton className="w-full space-y-2.5 xl:max-w-md">
          <div className="">
            {Array.from({ length: 2 }).map((_, index) => (
              <SkeletonLine key={index} className="h-60 w-3/5 mx-2 mb-2" />
            ))}
          </div>
        </Skeleton>
      </Grid.Col>
    </Grid>
  );
};
