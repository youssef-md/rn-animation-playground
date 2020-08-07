import React, { useMemo } from "react";
import { FlatList } from "react-native";
import { useTheme } from "styled-components";
import {
  MaterialCommunityIcons,
  AntDesign,
  MaterialIcons,
  Entypo,
} from "@expo/vector-icons";

import SectionBox from "../../components/SectionBox";

const Home: React.FC = () => {
  const { backgroundColor } = useTheme();

  const defaultIconStyle = useMemo(() => ({ size: 32 }), []);

  const sections = useMemo(() => {
    return [
      {
        title: "Values and Clocks",
        color: "#E980FC",
        route: "values-clocks",
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
        route: "transitions",
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
        route: "use-transition",
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
        route: "timing",
        icon: (
          <AntDesign color="#F5AB00" name="hourglass" {...defaultIconStyle} />
        ),
      },
      {
        title: "Pan Gesture",
        color: "#FF7E6B",
        route: "pan-gesture",
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
        route: "decay",
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
        route: "spring",
        icon: <Entypo color="#ED33B9" name="air" {...defaultIconStyle} />,
      },
      {
        title: "Swiping",
        color: "#1B9AAA",
        route: "swiping",
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
        route: "spring",
        icon: <Entypo color="#00CC33" name="air" {...defaultIconStyle} />,
      },
      {
        title: "Drag to Sort",
        color: "#FBAF00",
        route: "drag-sort",
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
        paddingHorizontal: 16,
        paddingTop: 22,
        backgroundColor,
      }}
      columnWrapperStyle={{ justifyContent: "space-between" }}
      renderItem={({ item: { title, color, route, icon } }) => (
        <SectionBox
          key={route}
          title={title}
          color={color}
          route={route}
          icon={icon}
        />
      )}
    />
  );
};

export default Home;
