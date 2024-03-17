type CustomTextInput = {
  placeholder: string;
  value: string | number;
  setValue: React.Dispatch<React.SetStateAction<string | number>>;
  type?: string;
  label: string;
};

type CustomButton = {
  text: string;
  disabled: boolean;
};

type LayoutProps = {
  children: any;
};

type ReusableComponent = {
  Title: any;
  Caption: any;
  Img: any;
};

type Testimonials = {
  key: number;
  type: string;
  content: any;
  Img: any;
  quotes: any;
  className: any;
  profileName: string;
  Testimonies: string;
  profile: any;
};
