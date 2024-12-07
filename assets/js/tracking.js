import mixpanel from "mixpanel-browser";

mixpanel.init("13112c94b385f01f21edd6bc6eecd2ff", {
  debug: true,
  track_pageview: true,
  persistence: "localStorage",
});
