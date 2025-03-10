tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        garamond: ["EB Garamond", "italic"],
        degular: ["Degular", "regular"]
      },
      colors: {
        primary: "#00A76F",
        secondary: "#919EAB",
        secondaryGray: "#637381",
        grayBg: "#e6ebef",
        grayText: "#848199",
        primaryLight: "#52BDAA",
        primaryDark: "#00B884",
        black: "#1C252E",
        green: "#2EAE7B",
        link: "#3E4592"
      },
      fontSize: { "2.5xl": "28px", "4.5xl": "40px", "6.5xl": "65px" },
      boxShadow: {
        "custom-24px": "0px 24px 24px 0px rgba(145, 158, 171, 0.16)"
      },
      backgroundImage: {
        "blue-gradient": "linear-gradient(135deg, #61F3F3 0%, #00B8D9 100%)",
        "gradient-green": "linear-gradient(135deg, #5BE49B 0%, #00A76F 100%)",
        "gradient-purple": "linear-gradient(135deg, #C684FF 0%, #8E33FF 100%)",
        "gradient-yellow-green":
          "linear-gradient(130deg, #FFAB00 0.21%, #00AB55 100%)",
        "gradient-orange": "linear-gradient(135deg, #FFAC82 0%, #FF5630 100%)",
        "gray-gradient":
          "linear-gradient(90deg, rgba(238,240,244,1) 0%, rgba(235,246,238,1) 31%, rgba(238,240,244,1) 72%, rgba(234,245,239,1) 100%)",
        "gradient-border":
          "linear-gradient(270deg, rgba(145, 158, 171, 0.00) 0%, #919EAB 50.04%, rgba(145, 158, 171, 0.00) 100%)"
      },
      backgroundColor: { greenLight: "#DAEEE6" },
      dropShadow: { "custom-lg": "0px 4px 40px rgba(0, 0, 0, 0.10)" }
    }
  }
};
