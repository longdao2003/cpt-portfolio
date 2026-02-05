export default function initProject() {
  const $track = $("#card-track .card-track-wrapper");
  const $container = $track.parent().parent();
  const $cardTrack = $track.parent();
  const trackElement = $track[0];

  // lấy padding trái + phải của container
  const totalPadding = parseFloat($container.css("padding-left")) || 0;

  // set width cho cardTrack = 100vw - padding
  $cardTrack.css("width", `calc(100vw - ${totalPadding}px)`);

  // Event: Mouse Down
  $(window).on("mousedown", (e) => {
    $track.data("mouseDownAt", e.clientX);
  });

  // Event: Mouse Up
  $(window).on("mouseup", (e) => {
    $track.data("mouseDownAt", 0);
    $track.data("prevPercentage", $track.data("percentage") || 0);
  });

  $(window).on("mousemove", (e) => {
    // Nếu mouse không được nhấn xuống thì return
    if ($track.data("mouseDownAt") === 0) return;

    // Tính toán khoảng cách di chuyển
    const mouseDelta = parseFloat($track.data("mouseDownAt")) - e.clientX;
    const maxDelta = $(window).width() / 2;

    // Tính phần trăm di chuyển
    const percentage = (mouseDelta / maxDelta) * -100;
    const nextPerUnconstrained =
      parseFloat($track.data("prevPercentage") || 0) + percentage;

    // Giới hạn phần trăm: 0 đến -66.67 (2/3 của -100)
    const maxScroll = -66.67; // 2/3 của 100%
    const nextPercentage = Math.max(
      Math.min(nextPerUnconstrained, 0),
      maxScroll,
    );

    // Cập nhật giá trị percentage
    $track.data("percentage", nextPercentage);

    // Animate track với Web Animations API
    trackElement.animate(
      {
        transform: `translate(${nextPercentage}%, -50%)`,
      },
      {
        duration: 1200,
        fill: "forwards",
      },
    );
  });

  $track.on("wheel", function (e) {
    const oe = e.originalEvent;

    // Chỉ xử lý kéo ngang bằng 2 ngón
    if (Math.abs(oe.deltaX) <= Math.abs(oe.deltaY)) return;

    e.preventDefault();

    const deltaX = oe.deltaX;
    const maxDelta = $(window).width() / 2;

    // Đổi deltaX → percentage (cùng logic với mousemove)
    const percentage = (deltaX / maxDelta) * -100;

    const prevPercentage = parseFloat($track.data("percentage")) || 0;
    const nextPerUnconstrained = prevPercentage + percentage;

    // Giới hạn giống mouse drag
    const maxScroll = -66.67;
    const nextPercentage = Math.max(
      Math.min(nextPerUnconstrained, 0),
      maxScroll,
    );

    // Lưu state
    $track.data("percentage", nextPercentage);
    $track.data("prevPercentage", nextPercentage);

    // Animate giống hệt mousemove
    trackElement.animate(
      {
        transform: `translate(${nextPercentage}%, -50%)`,
      },
      {
        duration: 2500,
        fill: "forwards",
      },
    );
  });
}
