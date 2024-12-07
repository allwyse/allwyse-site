const onButtonClick = (url, buttonClicked, from_view = "") => {
  console.log(buttonClicked);
  window.location.replace(url);
  mixpanel.track("user_clicked", {
    widget_name: buttonClicked,
    from_view,
  });
};
