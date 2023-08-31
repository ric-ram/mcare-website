"use client";

import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  Text,
  Stack,
} from "@chakra-ui/react";
import {
  StarOutlineRounded,
  StarRounded,
  StarHalfRounded,
} from "@mui/icons-material";

const data = {
  isNew: true,
  imageURL:
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
  name: "Wayfarer Classic",
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
};

interface RatingProps {
  rating: number;
}

export type TestimonialCardProps = {
  author: string;
  review: string;
  rating: number;
};

function Rating({ rating }: RatingProps) {
  return (
    <Box display="flex" alignItems="center" marginLeft={-1}>
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return <Icon key={i} as={StarRounded} color={"yellow"} ml={1} />;
          }
          if (roundedRating - i === 0.5) {
            return (
              <Icon key={i} as={StarHalfRounded} color={"yellow"} ml={1} />
            );
          }
          return (
            <Icon key={i} as={StarOutlineRounded} color={"yellow"} ml={1} />
          );
        })}
    </Box>
  );
}

export default function TestimonialCard({
  author,
  review,
  rating,
}: TestimonialCardProps) {
  return (
    <Box
      bg={"lightBlue.200"}
      maxW={{base: '246px', xl: "396px"}}
      maxH={{base: '380px', xl: "340px"}}
      rounded="lg"
      shadow="md"
      position="relative"
      mx={8}
    >
      <Stack px={{base: 3, xl: 6}} py={8} spacing={{base: 6, xl: 16}}>
        <Flex
          justifyContent="space-between"
          align={{base: 'center', xl: "flex-start"}}
          direction="column"
          gap={{base: 4, xl: 6}}
        >
          <Rating rating={rating} />
          <Text textAlign={{base: 'center', xl: 'left'}}>{review}</Text>
        </Flex>
        <Flex justifyContent="space-between" alignContent="center">
          <Box
            fontSize="2xl"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            - {author}
          </Box>
        </Flex>
      </Stack>
    </Box>
  );
}
