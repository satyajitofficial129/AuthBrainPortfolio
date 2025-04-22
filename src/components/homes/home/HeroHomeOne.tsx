
"use client"
import React, { useEffect } from 'react'

export default function HeroHomeOne() {

  const parallax = (event: MouseEvent) => {
    const elements = document.querySelectorAll<HTMLElement>(".eitem");

    elements.forEach((shift) => {
      const position = Number(shift.getAttribute("value")); // Convert the attribute value to a number
      const x = (window.innerWidth - event.pageX * position) / 90;
      const y = (window.innerHeight - event.pageY * position) / 90;

      shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  };

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => parallax(event);
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);


  return (
    <>
      <section className="home-banner">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7 col-md-12">
              <div className="banner-content d-flex align-items-center">
                <div className="banner-content-inner">
                  <span className="subtitle">Empowering Your Digital Future</span>
                  <h2 className="title"><span>Turning</span> complex data into clear concept</h2>
                  <p>
                    We craft intelligent solutions fueled by data, <br />designed to drive growth, and built to scale with your future.
                  </p>

                  <div className="bbtns">
                    <a href="#" className="bg_btn bt">Contact Us</a>
                  </div>

                  <div className="sinfo">
                    <img src="assets/img/rev-img.png" alt="image" />
                    <span>24k + Happy Client</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="banner_img">
            <div className="banner_img_inner moeffect">
              <img src="assets/img/banner.png" alt="Banner Image" />
              

              <div className="total_course_badge align-self-center eitem" defaultValue="1.5">
                <div className="icon">
                  <svg fill="none" viewBox="0 0 37 32"><path fill="#fff" d="M2.389.481c-.748.24-1.51.932-1.8 1.652l-.162.402-.021 13.19C.392 30.115.37 29.353.78 30.06c.254.424.811.932 1.291 1.15l.403.191h25.548l.388-.183a2.972 2.972 0 001.623-2.104c.035-.204.07-.755.07-1.213v-.84h2.28c2.505 0 2.738-.028 3.268-.417.155-.12.374-.38.494-.585l.204-.375V24.06c0-1.828-.02-1.912-.578-2.449-.523-.508-.55-.508-3.247-.536l-2.42-.021v-1.765c0-2.117-.036-2.25-.629-2.25a.53.53 0 00-.345.161c-.149.163-.156.212-.156 2.012v1.849H23.54c-4.474 0-5.484.014-5.674.099-.127.049-1.045.607-2.04 1.235-1.708 1.072-1.828 1.136-2.16 1.136-.296 0-.373.028-.493.183-.19.248-.19.466.014.7.12.147.247.197.579.24.388.049.578.154 2.286 1.227l1.863 1.179h11.073l-.028 1.002c-.021.811-.05 1.066-.155 1.277-.177.36-.501.678-.854.833-.268.127-.826.134-12.703.134H2.826l-.36-.17a1.657 1.657 0 01-.846-.938c-.078-.219-.092-2.124-.1-10.417V8.64h27.454v1.842c0 1.037.029 1.891.07 1.962.036.07.163.17.276.218.261.106.558-.014.692-.282.113-.226.134-9.083.02-9.669A2.89 2.89 0 0028.488.644l-.465-.226L15.353.404C5.014.397 2.63.41 2.39.48zM27.95 1.646c.353.155.677.473.854.833.12.247.134.48.155 2.646l.021 2.386H1.521V5.18c0-2.526.007-2.575.402-3.09.099-.135.346-.318.543-.41l.36-.17h12.422c11.877 0 12.435.008 12.703.135zm3.352 22.414v1.87H18.6v-1.82c0-1.002.021-1.85.05-1.87.02-.029 2.879-.05 6.351-.05h6.302v1.87zm3.494-1.771c.423.183.473.367.444 1.877l-.02 1.341-.198.19-.191.198-1.2.021-1.2.021V22.19h1.06c.761 0 1.128.028 1.305.099zm-17.34 2.435l-.022.698-1.08-.67-1.08-.678.516-.324c.282-.184.77-.487 1.08-.685l.564-.353.021.65c.008.36.008.974 0 1.362z" /><path fill="#fff" d="M4.568 3.022c-.685.226-1.073.755-1.073 1.482 0 .868.65 1.524 1.525 1.524.973 0 1.672-.854 1.496-1.835-.163-.875-1.101-1.44-1.948-1.171zm.734 1.207c.176.183.183.367.014.578-.099.127-.515.113-.621-.014-.141-.17-.106-.473.07-.614.212-.17.325-.162.537.05zM8.754 2.986c-1.22.31-1.644 1.715-.769 2.59.353.36.692.48 1.235.438.558-.042.946-.304 1.214-.826.29-.586.233-1.164-.176-1.665-.353-.424-1.01-.657-1.504-.537zm.657 1.257c.303.402-.261.875-.635.536-.29-.261-.022-.783.352-.692a.548.548 0 01.283.156zM12.757 2.987c-.797.204-1.34 1.086-1.143 1.856.19.72.783 1.185 1.51 1.185.614 0 1.108-.31 1.398-.875.219-.43.162-1.136-.134-1.538-.353-.494-1.066-.77-1.63-.628zm.607 1.178c.177.12.219.501.07.65-.147.148-.528.105-.648-.071-.156-.219-.142-.318.063-.515.198-.205.296-.22.515-.064zM6.617 11.625c-.303.325-.14.826.304.939.099.021.388.028.649.014.381-.021.487-.056.593-.19.183-.226.17-.58-.028-.77-.142-.134-.247-.155-.763-.155-.536 0-.62.014-.755.162zM11.804 11.547c-.19.156-.275.466-.177.678.184.374.015.367 6.218.367h5.78l.205-.205c.254-.254.261-.515.028-.748l-.17-.176h-5.885c-4.595 0-5.907.02-6 .084zM29.277 14.215c-.212.085-.304.29-.304.691 0 .417.198.65.55.65.565 0 .791-.897.318-1.27-.197-.156-.317-.17-.564-.071zM6.617 15.365c-.261.276-.198.692.134.861.296.156 11.546.156 11.842 0a.53.53 0 00.128-.868l-.163-.155H6.765l-.148.162zM22.404 15.274c-.204.12-.303.459-.19.677.141.304.374.389.967.367.466-.02.536-.042.684-.218.22-.255.212-.502-.007-.72-.155-.163-.226-.177-.755-.177-.325 0-.635.036-.699.07zM6.615 19.106a.622.622 0 00-.085.684c.141.269.395.283 4.355.283 4.05 0 4.164-.007 4.283-.318.092-.24.043-.508-.12-.656l-.162-.155H6.763l-.148.162z" /></svg>
                </div>
                <div className="tcourse_content">
                  <h4>100+</h4>
                  <span>Total Complete Projects</span>
                </div>
              </div>
            </div>
          </div>

          <div className="book_icon">
            <i className='bx bx-book-open'></i>
          </div>

        </div>
      </section>
    </>
  )
}
