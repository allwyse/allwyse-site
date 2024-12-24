const onButtonClick = (url, buttonClicked, from_view = "") => {
  window.location.replace(url);
  if (window.location.href.includes("localhost")) {
    return;
  }
  mixpanel.track("user_clicked", {
    widget_name: buttonClicked,
    from_view,
    from_page: window.location.pathname,
  });
};
