import React from 'react'
import s from './style.module.css';
import instagram from '../Media/instagram.png';
import whatsapp from '../Media/whatsapp.png';
import sale_img from '../Media/Sale_img.png';

export default function Footer2() {
    return (
      <div className={s.main}>
          <div className={s.main_container}>
          <div className={s.card_details}>
            <div style={{ fontWeight: '600' }}>Contact</div>
            <div  style={{ fontWeight: '600' }} className={s.phone}>+49 999 999 99 99</div>
            
            <div className={s.social_media}>
              <div>
                <a href="https://instagram.com/startainstitute?igshid=MzRlODBiNWFlZA==">
                <img src={instagram} alt="Instagram" />
                <p>instagram</p>
                </a>
              </div>
              <div>
                <a href="https://www.whatsapp.com/">
                <img src={whatsapp} alt="whatsapp" />
                <p>WhatsApp</p>
                </a>
              </div>
            </div>
          </div>
          
          
          <div className={s.address_details}>
            <div className={s.adress_size} style={{ fontWeight: '700', fontSize: '40px' }}>Address</div>
            <div className={s.adress}>Linkstraße 2, 8 OG, 10785, Berlin, Deutschland</div>
            <div style={{ fontSize: '18px', paddingTop: '25px', fontWeight: '500' }}>Working Hours:</div>
            <div style={{ fontSize: '24px',fontWeight: '600' }}>24 hours a day</div>
          </div>
        </div>
        
        <iframe
              className={s.map}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.4090467601136!2d13.3701737934254!3d52.507936065083385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8515353a68755%3A0xd0866511db4f838f!2sStarta%20Institute%20by%20Tel-Ran!5e0!3m2!1sru!2sde!4v1687802320826!5m2!1sru!2sde"
              width="600"
              height="450"
              style={{ border: '0' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
          />
          
      </div>
    )
  }
  
  