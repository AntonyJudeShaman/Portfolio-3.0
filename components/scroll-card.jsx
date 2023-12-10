import React, { useState, useEffect } from "react";

const ImageGallery = () => {
  const track = document.getElementById("image-track");

  const handleOnDown = (e) =>
    track.setAttribute("data-mouse-down-at", e.clientX);

  const handleOnMove = (e) => {
    if (!track || track.getAttribute("data-mouse-down-at") === "0") return;

    const mouseDelta =
        parseFloat(track?.getAttribute("data-mouse-down-at")) - e.clientX,
      maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100,
      nextPercentageUnconstrained =
        parseFloat(track.getAttribute("data-prev-percentage")) + percentage,
      nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

    track.setAttribute("data-percentage", nextPercentage);
    track.classList.add("track-animating");

    requestAnimationFrame(() => {
      track.animate(
        { transform: `translate(${nextPercentage}%, -50%)` },
        { duration: 2000, fill: "forwards" }
      );

      for (const image of track.getElementsByClassName("image")) {
        image.animate(
          { objectPosition: `${100 + nextPercentage}% center` },
          { duration: 1200, fill: "forwards" }
        );
      }
    });
  };

  const handleOnUp = () => {
    track.setAttribute("data-mouse-down-at", "0");
    track.setAttribute(
      "data-prev-percentage",
      track.getAttribute("data-percentage")
    );
  };

  const handleOnWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY;
    const currentPercentage = parseFloat(!track || track.getAttribute("data-percentage"));
    const nextPercentage = Math.max(
      Math.min(currentPercentage + delta * 0.1, 0),
      -100
    );

    track.setAttribute("data-percentage", nextPercentage);
    track.classList.add("track-animating");

    requestAnimationFrame(() => {
      track.animate(
        { transform: `translate(${nextPercentage}%, -50%)` },
        { duration: 2000, fill: "forwards" }
      );

      for (const image of track.getElementsByClassName("image")) {
        image.animate(
          { objectPosition: `${100 + nextPercentage}% center` },
          { duration: 1200, fill: "forwards" }
        );
      }
    });
  };

  window.onmousedown = (e) => handleOnDown(e);
  window.ontouchstart = (e) => handleOnDown(e.touches[0]);
  window.onmouseup = (e) => handleOnUp(e);
  window.ontouchend = (e) => handleOnUp(e.touches[0]);
  window.onmousemove = (e) => handleOnMove(e);
  window.ontouchmove = (e) => {
    e.preventDefault();
    handleOnMove(e.touches[0]);
  };

  window.addEventListener("wheel", handleOnWheel);

  return (
    <div className="image-body">
      {" "}
      <div id="image-track" data-mouse-down-at="0" data-prev-percentage="0">
        <img
          className="image"
          src="https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          draggable="false"
        />
        <img
          className="image"
          src="https://images.unsplash.com/photo-1610194352361-4c81a6a8967e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
          draggable="false"
        />
        <img
          className="image"
          src="https://images.unsplash.com/photo-1618202133208-2907bebba9e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          draggable="false"
        />
        <img
          className="image"
          src="https://images.unsplash.com/photo-1495805442109-bf1cf975750b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          draggable="false"
        />
        <img
          className="image"
          src="https://images.unsplash.com/photo-1548021682-1720ed403a5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          draggable="false"
        />
        <img
          className="image"
          src="https://images.unsplash.com/photo-1496753480864-3e588e0269b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80"
          draggable="false"
        />
        <img
          className="image"
          src="https://images.unsplash.com/photo-1613346945084-35cccc812dd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1759&q=80"
          draggable="false"
        />
        <img
          className="image"
          src="https://images.unsplash.com/photo-1516681100942-77d8e7f9dd97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          draggable="false"
        />
      </div>
    </div>
  );
};

export default function ScrollHome() {
  return (
    <div>
      <ImageGallery />
    </div>
  );
}
