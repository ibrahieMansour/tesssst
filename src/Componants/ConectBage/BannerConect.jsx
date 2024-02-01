/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function BannerConect() {
  return (
    <div>
        <section class="bg-light">
        <div class="container py-4">
            <div class="row align-items-center justify-content-between">
                <div class="contact-header col-lg-4">
                    <h1 class="h2 pb-3 ">Contact</h1>
                    <h5 class="h4 regular-400">Elit, sed do eiusmod tempor</h5>
                    <p class="light-300">
                        Vector illustration is from <a rel="nofollow" href="https://storyset.com/" target="_blank">StorySet</a>.
                        Incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                    </p>
                </div>
                <div class="contact-img col-lg-5 align-items-end col-md-4">
                    <Image src="../../img/banner-img-01.svg"/>
                </div>
            </div>
        </div>
    </section>
      
    </div>
  )
}
