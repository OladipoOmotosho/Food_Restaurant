const CustomText = ({
  text,
  type,
  className,
  color,
  weight,
  fontFamily,
  onClick,
}: CustomTextProps) => {
  //text is the word
  return (
    <p
      className={className}
      style={{
        fontFamily:
          weight === 700
            ? 'SegoeUIBold'
            : weight === 400
            ? 'SegoeUI_Normal'
            : weight === 600
            ? 'SegoeUISemiBold'
            : 'SegoeUI',
        color,
      }}
    >
      {text}
    </p>
  );
};

export default CustomText;
