import { GetPath, TemplateProps } from "@yext/pages";
import CTASectionWithPhoto from "../components/CTASectionWithPhoto";
import FAQCentered from "../components/FAQCentered";
import PageLayout from "../components/PageLayout";

export const getPath: GetPath<TemplateProps> = () => {
  return "test";
};

export default function Test() {
  return (
    <PageLayout backgroundColor="#a71616">
      <CTASectionWithPhoto
        cta1Color={``}
        cta1Label={`Click Here`}
        bgImage={`https://images.carriercms.com/image/upload/w_600,q_auto,f_auto/v1568822357/kidde/graphics/house-with-magnifying-glass.jpg`}
        paragraph={`This is the paragraph`}
        subheading={`Subheading`}
        heading={`Heading`}
      />
      <FAQCentered backgroundColor={`#333333`} heading={`FAQ`} />
    </PageLayout>
  );
}
