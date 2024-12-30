// Load the Mixpanel library dynamically
(function (e, a) {
  if (!a.__SV) {
    var b = window;
    try {
      var c,
        l,
        i,
        j = b.location,
        g = j.hash;
      c = function (a, b) {
        return (l = a.match(RegExp(b + "=([^&]*)"))) ? l[1] : null;
      };
      g &&
        c(g, "state") &&
        ((i = JSON.parse(decodeURIComponent(c(g, "state")))),
        "mpeditor" === i.action &&
          (b.sessionStorage.setItem("_mpcehash", g),
          history.replaceState(
            i.desiredHash || "",
            e.title,
            j.pathname + j.search
          )));
    } catch (m) {}
    var k, h;
    window.mixpanel = a;
    a._i = [];
    a.init = function (b, c, f) {
      function e(b, a) {
        var c = a.split(".");
        2 == c.length && ((b = b[c[0]]), (a = c[1]));
        b[a] = function () {
          b.push([a].concat(Array.prototype.slice.call(arguments, 0)));
        };
      }
      var d = a;
      "undefined" !== typeof f ? (d = a[f] = []) : (f = "mixpanel");
      d.people = d.people || [];
      d.toString = function (b) {
        var a = "mixpanel";
        "mixpanel" !== f && (a += "." + f);
        b || (a += " (stub)");
        return a;
      };
      d.people.toString = function () {
        return d.toString(1) + ".people (stub)";
      };
      k =
        "disable time_event track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config reset people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user opt_out_tracking opt_in_tracking has_opted_out_tracking clear_opt_out_in_tracking".split(
          " "
        );
      for (h = 0; h < k.length; h++) e(d, k[h]);
      a._i.push([b, c, f]);
    };
    a.__SV = 1.2;
    b = e.createElement("script");
    b.type = "text/javascript";
    b.async = !0;
    b.src =
      "undefined" !== typeof MIXPANEL_CUSTOM_LIB_URL
        ? MIXPANEL_CUSTOM_LIB_URL
        : "https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";
    c = e.getElementsByTagName("script")[0];
    c.parentNode.insertBefore(b, c);
  }
})(document, window.mixpanel || []);

// Initialize Mixpanel
if (!window.location.href.includes("localhost")) {
  mixpanel.init("13112c94b385f01f21edd6bc6eecd2ff", {
    debug: false,
    track_pageview: true,
    persistence: "localStorage",
  });
}

const trackMPEvent = (widget_name = "", event = "user_clicked") => {
  let isObj = typeof widget_name !== "string";

  const payload = isObj
    ? { ...widget_name }
    : {
        widget_name,
      };

  if (window.location.href.includes("localhost")) {
    return;
  }
  mixpanel.track(event, payload);
};

function monitorScrollProgress() {
  let lastLoggedPercentage = 0;

  function calculateScrollPercentage() {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    return Math.floor((scrollTop / scrollHeight) * 100);
  }

  function handleScroll() {
    const currentPercentage = calculateScrollPercentage();
    if (currentPercentage >= lastLoggedPercentage + 20) {
      if (lastLoggedPercentage > 0) {
        trackMPEvent(
          {
            from_view: window.location.href,
            scroll_percentage: lastLoggedPercentage,
          },
          "user_scroll"
        );
      }

      lastLoggedPercentage += 20;
    }
  }

  window.document.querySelector("body").onscroll = handleScroll;
}

window.document.addEventListener("DOMContentLoaded", function () {
  monitorScrollProgress();
});
