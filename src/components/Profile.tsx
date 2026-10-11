import { Profile as User } from "@assets/svg";

import { cv } from "../cvData";

import { ContentSection } from "./ContentSection";

export const Profile = () => (
  <ContentSection Icon={User} title="Profile">
    {cv.profile}
  </ContentSection>
);
