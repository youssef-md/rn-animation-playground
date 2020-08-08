import React, { useMemo, useEffect } from "react";
import { FlatList } from "react-native";
import { useTheme } from "styled-components";
import {
  MaterialCommunityIcons,
  AntDesign,
  MaterialIcons,
  Entypo,
} from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/native";

import SectionBox from "../../components/SectionBox";
import { useGitHubLink } from "../../hooks/githubLink";

const Home: React.FC = () => {
  const { backgroundColor } = useTheme();
  const isFocused = useIsFocused();
  const { setRepoLink } = useGitHubLink();

  useEffect(() => {
    if (isFocused) {
      setRepoLink("https://github.com/youssef-md/reanimated-playground");
    }
  }, [isFocused, setRepoLink]);

  const defaultIconStyle = useMemo(() => ({ size: 32 }), []);

  const sections = useMemo(() => {
    return [
      {
        title: "Animated Layout",
        color: "#E980FC",
        githubLink: "GitHub Link",
        icon: (
          <MaterialCommunityIcons
            color="#E980FC"
            name="progress-clock"
            {...defaultIconStyle}
          />
        ),
      },
      {
        title: "Transitions",
        color: "#058ED9",
        githubLink: "GitHub Link",
        icon: (
          <MaterialCommunityIcons
            color="#058ED9"
            name="transition"
            {...defaultIconStyle}
          />
        ),
      },
      {
        title: "useTransition",
        color: "#09A129",
        githubLink: "GitHub Link",
        icon: (
          <MaterialCommunityIcons
            color="#09A129"
            name="hook"
            {...defaultIconStyle}
          />
        ),
      },
      {
        title: "Timing",
        color: "#F5AB00",
        githubLink: "GitHub Link",
        icon: (
          <AntDesign color="#F5AB00" name="hourglass" {...defaultIconStyle} />
        ),
      },
      {
        title: "Pan Gesture",
        color: "#FF7E6B",
        githubLink: "GitHub Link",
        icon: (
          <MaterialCommunityIcons
            color="#FF7E6B"
            name="gesture"
            {...defaultIconStyle}
          />
        ),
      },
      {
        title: "Decay",
        color: "#7067CF",
        githubLink: "GitHub Link",
        icon: (
          <MaterialIcons
            color="#7067CF"
            name="hdr-strong"
            {...defaultIconStyle}
          />
        ),
      },
      {
        title: "Spring",
        color: "#ED33B9",
        githubLink: "GitHub Link",
        icon: <Entypo color="#ED33B9" name="air" {...defaultIconStyle} />,
      },
      {
        title: "Swiping",
        color: "#1B9AAA",
        githubLink: "GitHub Link",
        icon: (
          <MaterialCommunityIcons
            color="#1B9AAA"
            name="gesture-swipe-horizontal"
            {...defaultIconStyle}
          />
        ),
      },
      {
        title: "Dynamic Springs",
        color: "#00CC33",
        githubLink: "GitHub Link",
        icon: <Entypo color="#00CC33" name="air" {...defaultIconStyle} />,
      },
      {
        title: "Drag to Sort",
        color: "#FBAF00",
        githubLink: "GitHub Link",
        icon: (
          <MaterialCommunityIcons
            color="#FBAF00"
            name="sort-descending"
            {...defaultIconStyle}
          />
        ),
      },
    ];
  }, [defaultIconStyle]);

  return (
    <FlatList
      data={sections}
      numColumns={2}
      contentContainerStyle={{
        paddingHorizontal: 11,
        paddingTop: 22,
        backgroundColor,
      }}
      columnWrapperStyle={{ justifyContent: "space-between" }}
      renderItem={({ item: { title, color, githubLink, icon } }) => (
        <SectionBox
          key={title}
          title={title}
          color={color}
          githubLink={githubLink}
          icon={icon}
        />
      )}
    />
  );
};

export default Home;
