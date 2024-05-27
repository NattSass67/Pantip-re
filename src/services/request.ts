// เลือกห้อง
export async function getRoomRecommend() {
  try {
    const response = await fetch(
      'https://pantip.com/api/forum-service/home/get_room_recommend?tracking_code=%7Bsbm4ai1s974a3xUiKxEuz%7D',
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          'accept-language': 'en-US,en;q=0.9',
          'if-none-match': 'W/"3ebc-XOHxluSPXbqXP9WlcO8gIKCfQig"',
          priority: 'u=1, i',
          ptauthorize: 'Basic dGVzdGVyOnRlc3Rlcg==',
          'sec-ch-ua':
            '\'Microsoft Edge\';v="125", \'Chromium\';v="125", \'Not.A/Brand\';v="24"',
          'sec-ch-ua-mobile': '?1',
          'sec-ch-ua-platform': "'Android'",
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          cookie:
            'pantip_visitc=sbm4ai1s974a3xUiKxEuz; ka_iid=AodcLUUuLYoct3pGfDGibK; iUUID=4348f7c93ab70392f0f1749f9808a91d; pantip_ha=20240522222237; _cc_id=9a7fa8733d06583baa4294aea0ee8481; panoramaId_expiry=1716996157708; panoramaId=cc5254420c0600bc627df10d2aca4945a70251f8d6757ad91db50b7052652cea; panoramaIdType=panoIndiv; cto_bundle=76JhI180MWxjZ2NhN281NUJ2SVVvWDBTdkVrZWdzWDRHS0RZZjJhMkE1TFlKb0tSTnBrTjBrQ0NsVUglMkJwM08lMkJRemFxVEZ2MFo4Yk5jeE5RbDFUYVBZYzRqem0lMkJrNEN1RXgzN2R5dmZMOXlmJTJCMVFLT3hISCUyRlVqWDJtWFhIcndzMWJiVU8; rlr=30408046; __gads=ID=f4be661d656ce5b4:T=1712560701:RT=1716404669:S=ALNI_MaIQGoxzUGoiQQhPb3M-76ZFebA1w; __gpi=UID=00000de3fd93494e:T=1712560701:RT=1716404669:S=ALNI_MYONSMNqNVFWmhATGVfsTFxSq8ABA; __eoi=ID=4e294814b38e656d:T=1712560701:RT=1716404669:S=AA-AfjY_Bck6XVCw_H6FtNzqpw2m; PHPSESSID=pkontq97ds4u0gamvoukukdtu4; pantip_sessions=mPzjt4MeQzjnaqwIfMdaFCMUUuqAosPBzorkYt8WFuhFhKgOEN%2B3GWbZXfvM0MOcT2KuWNFx70hLWvvlRk%2FbcwxcIqN3MtNmOnC1pEUqKgeT%2BWlefYzBCRX4GmAArdicwqHrAWauY3dSlr2vvtqKLj9NIB31dn4O4L9LlPwZuvRUesiee3mgb1g1173Km6ihz%2FbBeO9nK0R30VWmymtMBVEXsdFVeiNjpv06XKx%2FYG7qFwZdrQF7qYii6gyuqXWaOJ0nPlFSKf%2FtZwtTQsf2QgJXEGPQwEWG70s2C3vnCdyYQv%2B%2Bnz1wiNCpn1CHTe%2FQ%2F6e2pV1vBfPMCQ92K%2Bu7aw%3D%3D; _gid=GA1.2.1862776857.1716660469; _dc_gtm_UA-10478864-2=1; ka_sid=Kj8ukNvv9eQfPtLLGBTHW9; freq.5f73e63e47e7040e00000000=1; innity.dmp.cks.innity=1; innity.dmp.254.sess=1.1716660470758.1716660470758.1716660470758; innity.dmp.254.sess.id=37261285.254.1716660470758; _ga=GA1.1.756706637.1712560699; _ga_ZMC2WGXL4Z=GS1.1.1716660468.7.1.1716660478.50.0.0',
          Referer: 'https://pantip.com/',
          'Referrer-Policy': 'strict-origin-when-cross-origin',
        },
        body: null,
        method: 'GET',
      },
    );

    return await response.json();
  } catch (error) {
    return {
      success: true,
      data: [
        {
          id: 10,
          name: 'ซิลิคอนวัลเลย์',
          name_en: 'siliconvalley',
          slug: 'siliconvalley',
          description:
            'คอมมือใหม่ อินเทอร์เน็ต ซอฟต์แวร์ ฮาร์ดแวร์ เกม เขียนโปรแกรม Gadget',
          link_url: 'https://pantip.com/forum/siliconvalley',
          room_icon_url:
            'https://ptcdn.info/mobile/icon_room/pt-forum-siliconvalley.svg',
          is_pinned: false,
          pinned_time: null,
          order: null,
        },
        {
          id: 2,
          name: 'ก้นครัว',
          name_en: 'food',
          slug: 'food',
          description:
            'ร้านอาหาร สูตรอาหาร อาหารคาว อาหารหวาน เบเกอรี่ ไอศกรีม',
          link_url: 'https://pantip.com/forum/food',
          room_icon_url:
            'https://ptcdn.info/mobile/icon_room/pt-forum-food.svg',
          is_pinned: false,
          pinned_time: null,
          order: null,
        },
        {
          id: 28,
          name: 'กรีนโซน',
          name_en: 'greenzone',
          slug: 'greenzone',
          description:
            'อนุรักษ์สิ่งแวดล้อม อนุรักษ์พลังงาน Green Living การออกแบบเพื่อสิ่งแวดล้อม ผลิตภัณฑ์รักษ์โลก เกษตรอินทรีย์',
          link_url: 'https://pantip.com/forum/greenzone',
          room_icon_url:
            'https://ptcdn.info/mobile/icon_room/pt-forum-greenzone.svg',
          is_pinned: false,
          pinned_time: null,
          order: null,
        },
        {
          id: 35,
          name: 'กรุงโซล',
          name_en: 'korea',
          slug: 'korea',
          description:
            'K-POP ซีรีส์เกาหลี นักแสดงเกาหลี อาหารเกาหลี เที่ยวเกาหลี แฟชั่นเกาหลี ภาษาเกาหลี',
          link_url: 'https://pantip.com/forum/korea',
          room_icon_url:
            'https://ptcdn.info/mobile/icon_room/pt-forum-korea.svg',
          is_pinned: false,
          pinned_time: null,
          order: null,
        },
        {
          id: 1,
          name: 'กล้อง',
          name_en: 'camera',
          slug: 'camera',
          description: 'กล้องถ่ายรูป กล้อง DSLR กล้องวิดีโอ เทคนิคการถ่ายรูป',
          link_url: 'https://pantip.com/forum/camera',
          room_icon_url:
            'https://ptcdn.info/mobile/icon_room/pt-forum-camera.svg',
          is_pinned: false,
          pinned_time: null,
          order: null,
        },
        {
          id: 30,
          name: 'การ์ตูน',
          name_en: 'cartoon',
          slug: 'cartoon',
          description:
            'การ์ตูนญี่ปุ่น การ์ตูนไทย การ์ตูนฝรั่ง อนิเมะ วาดการ์ตูน ของสะสมจากการ์ตูน คอสเพลย์',
          link_url: 'https://pantip.com/forum/cartoon',
          room_icon_url:
            'https://ptcdn.info/mobile/icon_room/pt-forum-cartoon.svg',
          is_pinned: false,
          pinned_time: null,
          order: null,
        },
        {
          id: 36,
          name: 'แก็ดเจ็ต',
          name_en: 'gadget',
          slug: 'gadget',
          description:
            'Gadget, Action Camera, Drone, Game Console, Smartwatch, Smartband',
          link_url: 'https://pantip.com/forum/gadget',
          room_icon_url:
            'https://ptcdn.info/mobile/icon_room/pt-forum-gadget.svg',
          is_pinned: false,
          pinned_time: null,
          order: null,
        },
        {
          id: 3,
          name: 'แกลเลอรี่',
          name_en: 'gallery',
          slug: 'gallery',
          description: 'ภาพถ่ายบุคคล ภาพถ่ายทิวทัศน์ ภาพถ่ายมาโคร',
          link_url: 'https://pantip.com/forum/gallery',
          room_icon_url:
            'https://ptcdn.info/mobile/icon_room/pt-forum-gallery.svg',
          is_pinned: false,
          pinned_time: null,
          order: null,
        },
        {
          id: 4,
          name: 'ไกลบ้าน',
          name_en: 'klaibann',
          slug: 'klaibann',
          description: 'เรียนต่อต่างประเทศ ทำงานต่างประเทศ วีซ่า',
          link_url: 'https://pantip.com/forum/klaibann',
          room_icon_url:
            'https://ptcdn.info/mobile/icon_room/pt-forum-klaibann.svg',
          is_pinned: false,
          pinned_time: null,
          order: null,
        },
        {
          id: 5,
          name: 'จตุจักร',
          name_en: 'jatujak',
          slug: 'jatujak',
          description:
            'สัตว์เลี้ยง สุนัข แมว ต้นไม้ จัดสวน ของสะสม งานฝีมือ เกษตรกรรม',
          link_url: 'https://pantip.com/forum/jatujak',
          room_icon_url:
            'https://ptcdn.info/mobile/icon_room/pt-forum-jatujak.svg',
          is_pinned: false,
          pinned_time: null,
          order: null,
        },
        {
          id: 6,
          name: 'เฉลิมกรุง',
          name_en: 'chalermkrung',
          slug: 'chalermkrung',
          description:
            'นักร้องนักดนตรี เพลง เครื่องดนตรี คอนเสิร์ต มิวสิควิดีโอ',
          link_url: 'https://pantip.com/forum/chalermkrung',
          room_icon_url:
            'https://ptcdn.info/mobile/icon_room/pt-forum-chalermkrung.svg',
          is_pinned: false,
          pinned_time: null,
          order: null,
        },
        {
          id: 7,
          name: 'เฉลิมไทย',
          name_en: 'chalermthai',
          slug: 'chalermthai',
          description: 'ภาพยนตร์ ดาราภาพยนตร์ ค่ายหนัง เทศกาลหนัง หนังสั้น',
          link_url: 'https://pantip.com/forum/chalermthai',
          room_icon_url:
            'https://ptcdn.info/mobile/icon_room/pt-forum-chalermthai.svg',
          is_pinned: false,
          pinned_time: null,
          order: null,
        },
        {
          id: 8,
          name: 'ชานเรือน',
          name_en: 'family',
          slug: 'family',
          description: 'ครอบครัว ตั้งครรภ์ ตั้งชื่อลูก การเลี้ยงลูก การสอนลูก',
          link_url: 'https://pantip.com/forum/family',
          room_icon_url:
            'https://ptcdn.info/mobile/icon_room/pt-forum-family.svg',
          is_pinned: false,
          pinned_time: null,
          order: null,
        },
        {
          id: 9,
          name: 'ชายคา',
          name_en: 'home',
          slug: 'home',
          description:
            'บ้าน คอนโดมิเนียม ตกแต่งบ้าน เฟอร์นิเจอร์ เครื่องใช้ไฟฟ้า เครื่องครัว',
          link_url: 'https://pantip.com/forum/home',
          room_icon_url:
            'https://ptcdn.info/mobile/icon_room/pt-forum-home.svg',
          is_pinned: false,
          pinned_time: null,
          order: null,
        },
        {
          id: 34,
          name: 'ดิโอลด์สยาม',
          name_en: 'theoldsiam',
          slug: 'theoldsiam',
          description:
            'ผู้สูงอายุ สุขภาพผู้สูงอายุ ชีวิตหลังเกษียณ สิทธิผู้สูงอายุ ท่องเที่ยวผู้สูงอายุ',
          link_url: 'https://pantip.com/forum/theoldsiam',
          room_icon_url:
            'https://ptcdn.info/mobile/icon_room/pt-forum-theoldsiam.svg',
          is_pinned: false,
          pinned_time: null,
          order: null,
        },
        {
          id: 11,
          name: 'โต๊ะเครื่องแป้ง',
          name_en: 'beauty',
          slug: 'beauty',
          description: 'เครื่องสำอาง เสริมสวย แฟชั่น เครื่องประดับ ลดความอ้วน',
          link_url: 'https://pantip.com/forum/beauty',
          room_icon_url:
            'https://ptcdn.info/mobile/icon_room/pt-forum-beauty.svg',
          is_pinned: false,
          pinned_time: null,
          order: null,
        },
        {
          id: 12,
          name: 'ถนนนักเขียน',
          name_en: 'writer',
          slug: 'writer',
          description: 'แต่งนิยาย เรื่องสั้น กลอน นิทาน',
          link_url: 'https://pantip.com/forum/writer',
          room_icon_url:
            'https://ptcdn.info/mobile/icon_room/pt-forum-writer.svg',
          is_pinned: false,
          pinned_time: null,
          order: null,
        },
        {
          id: 13,
          name: 'บลูแพลนเน็ต',
          name_en: 'blueplanet',
          slug: 'blueplanet',
          description:
            'เที่ยวไทย เที่ยวต่างประเทศ ทะเล ภูเขา เกาะ น้ำตก ดำน้ำ สายการบิน',
          link_url: 'https://pantip.com/forum/blueplanet',
          room_icon_url:
            'https://ptcdn.info/mobile/icon_room/pt-forum-blueplanet.svg',
          is_pinned: false,
          pinned_time: null,
          order: null,
        },
        {
          id: 31,
          name: 'บางขุนพรหม',
          name_en: 'tvshow',
          slug: 'tvshow',
          description: 'ละคร นักแสดง ซีรี่ส์ รายการโทรทัศน์ สถานีโทรทัศน์',
          link_url: 'https://pantip.com/forum/tvshow',
          room_icon_url:
            'https://ptcdn.info/mobile/icon_room/pt-forum-tvshow.svg',
          is_pinned: false,
          pinned_time: null,
          order: null,
        },
        {
          id: 32,
          name: 'บางรัก',
          name_en: 'bangrak',
          slug: 'bangrak',
          description: 'ความรัก แต่งงาน พรีเวดดิ้ง ปัญหาชีวิตคู่',
          link_url: 'https://pantip.com/forum/bangrak',
          room_icon_url:
            'https://ptcdn.info/mobile/icon_room/pt-forum-bangrak.svg',
          is_pinned: false,
          pinned_time: null,
          order: null,
        },
        {
          id: 33,
          name: 'พรหมชาติ',
          name_en: 'horoscope',
          slug: 'horoscope',
          description: 'ดูดวง ฮวงจุ้ย ไพ่ยิปซี ทำนายฝัน พระเครื่อง',
          link_url: 'https://pantip.com/forum/horoscope',
          room_icon_url:
            'https://ptcdn.info/mobile/icon_room/pt-forum-horoscope.svg',
          is_pinned: false,
          pinned_time: null,
          order: null,
        },
        {
          id: 14,
          name: 'พันทิป',
          name_en: 'pantip',
          slug: 'pantip',
          description: 'ข้อเสนอแนะถึงพันทิป วิธีการใช้งานพันทิป กิจกรรมพันทิป',
          link_url: 'https://pantip.com/forum/pantip',
          room_icon_url:
            'https://ptcdn.info/mobile/icon_room/pt-forum-pantip.svg',
          is_pinned: false,
          pinned_time: null,
          order: null,
        },
        {
          id: 15,
          name: 'ภูมิภาค',
          name_en: 'region',
          slug: 'region',
          description:
            'ภาคเหนือ ภาคอีสาน ภาคกลาง ภาคตะวันออก ภาคตะวันตก ภาคใต้',
          link_url: 'https://pantip.com/forum/region',
          room_icon_url:
            'https://ptcdn.info/mobile/icon_room/pt-forum-region.svg',
          is_pinned: false,
          pinned_time: null,
          order: null,
        },
        {
          id: 16,
          name: 'มาบุญครอง',
          name_en: 'mbk',
          slug: 'mbk',
          description: 'โทรศัพท์มือถือ Smartphone Tablet iOS Android',
          link_url: 'https://pantip.com/forum/mbk',
          room_icon_url: 'https://ptcdn.info/mobile/icon_room/pt-forum-mbk.svg',
          is_pinned: false,
          pinned_time: null,
          order: null,
        },
        {
          id: 100,
          name: 'รวมมิตร',
          name_en: 'all',
          slug: '',
          description: 'รวมกระทู้จากทุกห้อง',
          link_url: 'https://pantip.com/forum',
          room_icon_url: 'https://ptcdn.info/mobile/icon_room/pt-forum-all.svg',
          is_pinned: false,
          pinned_time: null,
          order: null,
        },
        {
          id: 17,
          name: 'รัชดา',
          name_en: 'ratchada',
          slug: 'ratchada',
          description: 'รถยนต์ มอเตอร์ไซค์ เครื่องเสียงรถยนต์ แต่งรถ การจราจร',
          link_url: 'https://pantip.com/forum/ratchada',
          room_icon_url:
            'https://ptcdn.info/mobile/icon_room/pt-forum-ratchada.svg',
          is_pinned: false,
          pinned_time: null,
          order: null,
        },
        {
          id: 18,
          name: 'ราชดำเนิน',
          name_en: 'rajdumnern',
          slug: 'rajdumnern',
          description:
            'การเมือง รัฐศาสตร์ กฎหมาย สภาผู้แทน รัฐบาล ฝ่ายค้าน พรรคการเมือง',
          link_url: 'https://pantip.com/forum/rajdumnern',
          room_icon_url:
            'https://ptcdn.info/mobile/icon_room/pt-forum-rajdumnern.svg',
          is_pinned: false,
          pinned_time: null,
          order: null,
        },
        {
          id: 99,
          name: 'ไร้สังกัด',
          name_en: 'isolate',
          slug: 'isolate',
          description: 'กระทู้อื่นๆ ที่ไม่สังกัดห้องไหนเลย',
          link_url: 'https://pantip.com/forum/isolate',
          room_icon_url:
            'https://ptcdn.info/mobile/icon_room/pt-forum-isolate.svg',
          is_pinned: false,
          pinned_time: null,
          order: null,
        },
        {
          id: 19,
          name: 'ศาลาประชาคม',
          name_en: 'social',
          slug: 'social',
          description:
            'กฎหมาย ปัญหาสังคม ปัญหาชีวิต เศรษฐกิจ คุ้มครองผู้บริโภค',
          link_url: 'https://pantip.com/forum/social',
          room_icon_url:
            'https://ptcdn.info/mobile/icon_room/pt-forum-social.svg',
          is_pinned: false,
          pinned_time: null,
          order: null,
        },
        {
          id: 20,
          name: 'ศาสนา',
          name_en: 'religious',
          slug: 'religious',
          description: 'ศาสนาพุทธ ศาสนาคริสต์ ศาสนาอิสลาม เที่ยววัด ทำบุญ',
          link_url: 'https://pantip.com/forum/religious',
          room_icon_url:
            'https://ptcdn.info/mobile/icon_room/pt-forum-religious.svg',
          is_pinned: false,
          pinned_time: null,
          order: null,
        },
        {
          id: 21,
          name: 'ศุภชลาศัย',
          name_en: 'supachalasai',
          slug: 'supachalasai',
          description: 'กีฬา ฟุตบอล บาสเกตบอล มวยสากล กอล์ฟ จักรยาน นักกีฬา',
          link_url: 'https://pantip.com/forum/supachalasai',
          room_icon_url:
            'https://ptcdn.info/mobile/icon_room/pt-forum-supachalasai.svg',
          is_pinned: false,
          pinned_time: null,
          order: null,
        },
        {
          id: 22,
          name: 'สยามสแควร์',
          name_en: 'siam',
          slug: 'siam',
          description:
            'ชีวิตวัยรุ่น การเรียน โรงเรียน มหาวิทยาลัย ความรักวัยรุ่น เกม',
          link_url: 'https://pantip.com/forum/siam',
          room_icon_url:
            'https://ptcdn.info/mobile/icon_room/pt-forum-siam.svg',
          is_pinned: false,
          pinned_time: null,
          order: null,
        },
        {
          id: 23,
          name: 'สวนลุมพินี',
          name_en: 'lumpini',
          slug: 'lumpini',
          description:
            'สุขภาพกาย สุขภาพจิต โรคมะเร็ง โรคไมเกรน โรคภูมิแพ้ ปวดประจำเดือน',
          link_url: 'https://pantip.com/forum/lumpini',
          room_icon_url:
            'https://ptcdn.info/mobile/icon_room/pt-forum-lumpini.svg',
          is_pinned: false,
          pinned_time: null,
          order: null,
        },
        {
          id: 24,
          name: 'สินธร',
          name_en: 'sinthorn',
          slug: 'sinthorn',
          description:
            'หุ้น เศรษฐกิจ การลงทุน LTF RMF ธนาคาร เงินตราต่างประเทศ',
          link_url: 'https://pantip.com/forum/sinthorn',
          room_icon_url:
            'https://ptcdn.info/mobile/icon_room/pt-forum-sinthorn.svg',
          is_pinned: false,
          pinned_time: null,
          order: null,
        },
        {
          id: 25,
          name: 'สีลม',
          name_en: 'silom',
          slug: 'silom',
          description:
            'การบริหารจัดการ การตลาด ทรัพยากรบุคคล งานขาย SME ภาษีนิติบุคคล',
          link_url: 'https://pantip.com/forum/silom',
          room_icon_url:
            'https://ptcdn.info/mobile/icon_room/pt-forum-silom.svg',
          is_pinned: false,
          pinned_time: null,
          order: null,
        },
        {
          id: 26,
          name: 'หว้ากอ',
          name_en: 'wahkor',
          slug: 'wahkor',
          description:
            'วิทยาศาสตร์ วิศวกรรม เทคโนโลยี ฟิสิกส์ ดาราศาสตร์ อวกาศ',
          link_url: 'https://pantip.com/forum/wahkor',
          room_icon_url:
            'https://ptcdn.info/mobile/icon_room/pt-forum-wahkor.svg',
          is_pinned: false,
          pinned_time: null,
          order: null,
        },
        {
          id: 27,
          name: 'ห้องสมุด',
          name_en: 'library',
          slug: 'library',
          description:
            'หนังสือ หนังสือนิยาย ภาษาไทย ภาษาจีน ภาษาอังกฤษ ปรัชญา ประวัติศาสตร์',
          link_url: 'https://pantip.com/forum/library',
          room_icon_url:
            'https://ptcdn.info/mobile/icon_room/pt-forum-library.svg',
          is_pinned: false,
          pinned_time: null,
          order: null,
        },
        {
          id: 29,
          name: 'หอศิลป์',
          name_en: 'art',
          slug: 'art',
          description:
            'ศิลปะ ภาพวาด ประวัติศาสตร์ศิลป์ สื่อประสม Graphic Design',
          link_url: 'https://pantip.com/forum/art',
          room_icon_url: 'https://ptcdn.info/mobile/icon_room/pt-forum-art.svg',
          is_pinned: false,
          pinned_time: null,
          order: null,
        },
      ],
    };
  }
}

export async function getSidebarContent() {
  try {
    const response = await fetch(
      'https://pantip.com/api/forum-service/home/get_sidebar_content',
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          'accept-language': 'en-US,en;q=0.9',
          'cache-control': 'no-cache',
          pragma: 'no-cache',
          priority: 'u=1, i',
          ptauthorize: 'Basic dGVzdGVyOnRlc3Rlcg==',
          'sec-ch-ua':
            '"Microsoft Edge";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
          'sec-ch-ua-mobile': '?1',
          'sec-ch-ua-platform': '"Android"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          cookie:
            'pantip_visitc=sbm4ai1s974a3xUiKxEuz; ka_iid=AodcLUUuLYoct3pGfDGibK; iUUID=4348f7c93ab70392f0f1749f9808a91d; pantip_ha=20240522222237; _cc_id=9a7fa8733d06583baa4294aea0ee8481; panoramaId_expiry=1716996157708; panoramaId=cc5254420c0600bc627df10d2aca4945a70251f8d6757ad91db50b7052652cea; panoramaIdType=panoIndiv; cto_bundle=76JhI180MWxjZ2NhN281NUJ2SVVvWDBTdkVrZWdzWDRHS0RZZjJhMkE1TFlKb0tSTnBrTjBrQ0NsVUglMkJwM08lMkJRemFxVEZ2MFo4Yk5jeE5RbDFUYVBZYzRqem0lMkJrNEN1RXgzN2R5dmZMOXlmJTJCMVFLT3hISCUyRlVqWDJtWFhIcndzMWJiVU8; rlr=30408046; __gads=ID=f4be661d656ce5b4:T=1712560701:RT=1716404669:S=ALNI_MaIQGoxzUGoiQQhPb3M-76ZFebA1w; __gpi=UID=00000de3fd93494e:T=1712560701:RT=1716404669:S=ALNI_MYONSMNqNVFWmhATGVfsTFxSq8ABA; __eoi=ID=4e294814b38e656d:T=1712560701:RT=1716404669:S=AA-AfjY_Bck6XVCw_H6FtNzqpw2m; PHPSESSID=pkontq97ds4u0gamvoukukdtu4; pantip_sessions=mPzjt4MeQzjnaqwIfMdaFCMUUuqAosPBzorkYt8WFuhFhKgOEN%2B3GWbZXfvM0MOcT2KuWNFx70hLWvvlRk%2FbcwxcIqN3MtNmOnC1pEUqKgeT%2BWlefYzBCRX4GmAArdicwqHrAWauY3dSlr2vvtqKLj9NIB31dn4O4L9LlPwZuvRUesiee3mgb1g1173Km6ihz%2FbBeO9nK0R30VWmymtMBVEXsdFVeiNjpv06XKx%2FYG7qFwZdrQF7qYii6gyuqXWaOJ0nPlFSKf%2FtZwtTQsf2QgJXEGPQwEWG70s2C3vnCdyYQv%2B%2Bnz1wiNCpn1CHTe%2FQ%2F6e2pV1vBfPMCQ92K%2Bu7aw%3D%3D; _gid=GA1.2.1862776857.1716660469; ka_sid=Kj8ukNvv9eQfPtLLGBTHW9; freq.5f73e63e47e7040e00000000=1; innity.dmp.cks.innity=1; innity.dmp.254.sess.id=37261285.254.1716660470758; _dc_gtm_UA-10478864-2=1; _ga=GA1.1.756706637.1712560699; innity.dmp.254.sess=4.1716660470758.1716661729481.1716661740485; _ga_ZMC2WGXL4Z=GS1.1.1716660468.7.1.1716661746.42.0.0',
          Referer: 'https://pantip.com/',
          'Referrer-Policy': 'strict-origin-when-cross-origin',
        },
        body: null,
        method: 'GET',
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    return null;
  }
}

export async function getHighlight() {
  try {
    const response = await fetch(
      'https://pantip.com/api/forum-service/home/get_highlight',
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          'accept-language': 'en-US,en;q=0.9',
          'cache-control': 'no-cache',
          pragma: 'no-cache',
          priority: 'u=1, i',
          ptauthorize: 'Basic dGVzdGVyOnRlc3Rlcg==',
          'sec-ch-ua':
            '"Microsoft Edge";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
          'sec-ch-ua-mobile': '?1',
          'sec-ch-ua-platform': '"Android"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          cookie:
            'pantip_visitc=sbm4ai1s974a3xUiKxEuz; ka_iid=AodcLUUuLYoct3pGfDGibK; iUUID=4348f7c93ab70392f0f1749f9808a91d; pantip_ha=20240522222237; _cc_id=9a7fa8733d06583baa4294aea0ee8481; panoramaId_expiry=1716996157708; panoramaId=cc5254420c0600bc627df10d2aca4945a70251f8d6757ad91db50b7052652cea; panoramaIdType=panoIndiv; cto_bundle=76JhI180MWxjZ2NhN281NUJ2SVVvWDBTdkVrZWdzWDRHS0RZZjJhMkE1TFlKb0tSTnBrTjBrQ0NsVUglMkJwM08lMkJRemFxVEZ2MFo4Yk5jeE5RbDFUYVBZYzRqem0lMkJrNEN1RXgzN2R5dmZMOXlmJTJCMVFLT3hISCUyRlVqWDJtWFhIcndzMWJiVU8; rlr=30408046; __gads=ID=f4be661d656ce5b4:T=1712560701:RT=1716404669:S=ALNI_MaIQGoxzUGoiQQhPb3M-76ZFebA1w; __gpi=UID=00000de3fd93494e:T=1712560701:RT=1716404669:S=ALNI_MYONSMNqNVFWmhATGVfsTFxSq8ABA; __eoi=ID=4e294814b38e656d:T=1712560701:RT=1716404669:S=AA-AfjY_Bck6XVCw_H6FtNzqpw2m; PHPSESSID=pkontq97ds4u0gamvoukukdtu4; pantip_sessions=mPzjt4MeQzjnaqwIfMdaFCMUUuqAosPBzorkYt8WFuhFhKgOEN%2B3GWbZXfvM0MOcT2KuWNFx70hLWvvlRk%2FbcwxcIqN3MtNmOnC1pEUqKgeT%2BWlefYzBCRX4GmAArdicwqHrAWauY3dSlr2vvtqKLj9NIB31dn4O4L9LlPwZuvRUesiee3mgb1g1173Km6ihz%2FbBeO9nK0R30VWmymtMBVEXsdFVeiNjpv06XKx%2FYG7qFwZdrQF7qYii6gyuqXWaOJ0nPlFSKf%2FtZwtTQsf2QgJXEGPQwEWG70s2C3vnCdyYQv%2B%2Bnz1wiNCpn1CHTe%2FQ%2F6e2pV1vBfPMCQ92K%2Bu7aw%3D%3D; _gid=GA1.2.1862776857.1716660469; ka_sid=Kj8ukNvv9eQfPtLLGBTHW9; freq.5f73e63e47e7040e00000000=1; innity.dmp.cks.innity=1; innity.dmp.254.sess.id=37261285.254.1716660470758; _dc_gtm_UA-10478864-2=1; _ga=GA1.1.756706637.1712560699; innity.dmp.254.sess=4.1716660470758.1716661729481.1716661740485; _ga_ZMC2WGXL4Z=GS1.1.1716660468.7.1.1716661746.42.0.0',
          Referer: 'https://pantip.com/',
          'Referrer-Policy': 'strict-origin-when-cross-origin',
        },
        body: null,
        method: 'GET',
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    return null;
  }
}

export async function getAnnounce() {
  try {
    const response = await fetch(
      'https://pantip.com/api/forum-service/forum/get_announce?room=homepage&limit=3',
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          'accept-language': 'en-US,en;q=0.9',
          'cache-control': 'no-cache',
          pragma: 'no-cache',
          priority: 'u=1, i',
          ptauthorize: 'Basic dGVzdGVyOnRlc3Rlcg==',
          'sec-ch-ua':
            '"Microsoft Edge";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
          'sec-ch-ua-mobile': '?1',
          'sec-ch-ua-platform': '"Android"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          cookie:
            'pantip_visitc=sbm4ai1s974a3xUiKxEuz; ka_iid=AodcLUUuLYoct3pGfDGibK; iUUID=4348f7c93ab70392f0f1749f9808a91d; pantip_ha=20240522222237; _cc_id=9a7fa8733d06583baa4294aea0ee8481; panoramaId_expiry=1716996157708; panoramaId=cc5254420c0600bc627df10d2aca4945a70251f8d6757ad91db50b7052652cea; panoramaIdType=panoIndiv; cto_bundle=76JhI180MWxjZ2NhN281NUJ2SVVvWDBTdkVrZWdzWDRHS0RZZjJhMkE1TFlKb0tSTnBrTjBrQ0NsVUglMkJwM08lMkJRemFxVEZ2MFo4Yk5jeE5RbDFUYVBZYzRqem0lMkJrNEN1RXgzN2R5dmZMOXlmJTJCMVFLT3hISCUyRlVqWDJtWFhIcndzMWJiVU8; rlr=30408046; __gads=ID=f4be661d656ce5b4:T=1712560701:RT=1716404669:S=ALNI_MaIQGoxzUGoiQQhPb3M-76ZFebA1w; __gpi=UID=00000de3fd93494e:T=1712560701:RT=1716404669:S=ALNI_MYONSMNqNVFWmhATGVfsTFxSq8ABA; __eoi=ID=4e294814b38e656d:T=1712560701:RT=1716404669:S=AA-AfjY_Bck6XVCw_H6FtNzqpw2m; PHPSESSID=pkontq97ds4u0gamvoukukdtu4; pantip_sessions=mPzjt4MeQzjnaqwIfMdaFCMUUuqAosPBzorkYt8WFuhFhKgOEN%2B3GWbZXfvM0MOcT2KuWNFx70hLWvvlRk%2FbcwxcIqN3MtNmOnC1pEUqKgeT%2BWlefYzBCRX4GmAArdicwqHrAWauY3dSlr2vvtqKLj9NIB31dn4O4L9LlPwZuvRUesiee3mgb1g1173Km6ihz%2FbBeO9nK0R30VWmymtMBVEXsdFVeiNjpv06XKx%2FYG7qFwZdrQF7qYii6gyuqXWaOJ0nPlFSKf%2FtZwtTQsf2QgJXEGPQwEWG70s2C3vnCdyYQv%2B%2Bnz1wiNCpn1CHTe%2FQ%2F6e2pV1vBfPMCQ92K%2Bu7aw%3D%3D; _gid=GA1.2.1862776857.1716660469; ka_sid=Kj8ukNvv9eQfPtLLGBTHW9; freq.5f73e63e47e7040e00000000=1; innity.dmp.cks.innity=1; innity.dmp.254.sess.id=37261285.254.1716660470758; _dc_gtm_UA-10478864-2=1; _ga=GA1.1.756706637.1712560699; innity.dmp.254.sess=4.1716660470758.1716661729481.1716661740485; _ga_ZMC2WGXL4Z=GS1.1.1716660468.7.1.1716661746.42.0.0',
          Referer: 'https://pantip.com/',
          'Referrer-Policy': 'strict-origin-when-cross-origin',
        },
        body: null,
        method: 'GET',
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    return null;
  }
}

export async function getClub() {
  try {
    const response = await fetch(
      'https://pantip.com/api/forum-service/forum/room_clubs?room=all&limit=40',
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          'accept-language': 'en-US,en;q=0.9',
          'cache-control': 'no-cache',
          pragma: 'no-cache',
          priority: 'u=1, i',
          ptauthorize: 'Basic dGVzdGVyOnRlc3Rlcg==',
          'sec-ch-ua':
            '"Microsoft Edge";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
          'sec-ch-ua-mobile': '?1',
          'sec-ch-ua-platform': '"Android"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          cookie:
            'pantip_visitc=sbm4ai1s974a3xUiKxEuz; ka_iid=AodcLUUuLYoct3pGfDGibK; iUUID=4348f7c93ab70392f0f1749f9808a91d; pantip_ha=20240522222237; _cc_id=9a7fa8733d06583baa4294aea0ee8481; panoramaId_expiry=1716996157708; panoramaId=cc5254420c0600bc627df10d2aca4945a70251f8d6757ad91db50b7052652cea; panoramaIdType=panoIndiv; cto_bundle=76JhI180MWxjZ2NhN281NUJ2SVVvWDBTdkVrZWdzWDRHS0RZZjJhMkE1TFlKb0tSTnBrTjBrQ0NsVUglMkJwM08lMkJRemFxVEZ2MFo4Yk5jeE5RbDFUYVBZYzRqem0lMkJrNEN1RXgzN2R5dmZMOXlmJTJCMVFLT3hISCUyRlVqWDJtWFhIcndzMWJiVU8; rlr=30408046; __gads=ID=f4be661d656ce5b4:T=1712560701:RT=1716404669:S=ALNI_MaIQGoxzUGoiQQhPb3M-76ZFebA1w; __gpi=UID=00000de3fd93494e:T=1712560701:RT=1716404669:S=ALNI_MYONSMNqNVFWmhATGVfsTFxSq8ABA; __eoi=ID=4e294814b38e656d:T=1712560701:RT=1716404669:S=AA-AfjY_Bck6XVCw_H6FtNzqpw2m; PHPSESSID=pkontq97ds4u0gamvoukukdtu4; pantip_sessions=mPzjt4MeQzjnaqwIfMdaFCMUUuqAosPBzorkYt8WFuhFhKgOEN%2B3GWbZXfvM0MOcT2KuWNFx70hLWvvlRk%2FbcwxcIqN3MtNmOnC1pEUqKgeT%2BWlefYzBCRX4GmAArdicwqHrAWauY3dSlr2vvtqKLj9NIB31dn4O4L9LlPwZuvRUesiee3mgb1g1173Km6ihz%2FbBeO9nK0R30VWmymtMBVEXsdFVeiNjpv06XKx%2FYG7qFwZdrQF7qYii6gyuqXWaOJ0nPlFSKf%2FtZwtTQsf2QgJXEGPQwEWG70s2C3vnCdyYQv%2B%2Bnz1wiNCpn1CHTe%2FQ%2F6e2pV1vBfPMCQ92K%2Bu7aw%3D%3D; _gid=GA1.2.1862776857.1716660469; ka_sid=Kj8ukNvv9eQfPtLLGBTHW9; freq.5f73e63e47e7040e00000000=1; innity.dmp.cks.innity=1; innity.dmp.254.sess.id=37261285.254.1716660470758; _dc_gtm_UA-10478864-2=1; _ga=GA1.1.756706637.1712560699; innity.dmp.254.sess=4.1716660470758.1716661729481.1716661740485; _ga_ZMC2WGXL4Z=GS1.1.1716660468.7.1.1716661746.42.0.0',
          Referer: 'https://pantip.com/',
          'Referrer-Policy': 'strict-origin-when-cross-origin',
        },
        body: null,
        method: 'GET',
      },
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    return null;
  }
}

export async function getTagHit() {
  try {
    const response = await fetch(
      'https://pantip.com/api/forum-service/home/get_tag_hit?limit=10',
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          'accept-language': 'en-US,en;q=0.9',
          'cache-control': 'no-cache',
          pragma: 'no-cache',
          priority: 'u=1, i',
          ptauthorize: 'Basic dGVzdGVyOnRlc3Rlcg==',
          'sec-ch-ua':
            '"Microsoft Edge";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
          'sec-ch-ua-mobile': '?1',
          'sec-ch-ua-platform': '"Android"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          cookie:
            'pantip_visitc=sbm4ai1s974a3xUiKxEuz; ka_iid=AodcLUUuLYoct3pGfDGibK; iUUID=4348f7c93ab70392f0f1749f9808a91d; pantip_ha=20240522222237; _cc_id=9a7fa8733d06583baa4294aea0ee8481; panoramaId_expiry=1716996157708; panoramaId=cc5254420c0600bc627df10d2aca4945a70251f8d6757ad91db50b7052652cea; panoramaIdType=panoIndiv; cto_bundle=76JhI180MWxjZ2NhN281NUJ2SVVvWDBTdkVrZWdzWDRHS0RZZjJhMkE1TFlKb0tSTnBrTjBrQ0NsVUglMkJwM08lMkJRemFxVEZ2MFo4Yk5jeE5RbDFUYVBZYzRqem0lMkJrNEN1RXgzN2R5dmZMOXlmJTJCMVFLT3hISCUyRlVqWDJtWFhIcndzMWJiVU8; rlr=30408046; __gads=ID=f4be661d656ce5b4:T=1712560701:RT=1716404669:S=ALNI_MaIQGoxzUGoiQQhPb3M-76ZFebA1w; __gpi=UID=00000de3fd93494e:T=1712560701:RT=1716404669:S=ALNI_MYONSMNqNVFWmhATGVfsTFxSq8ABA; __eoi=ID=4e294814b38e656d:T=1712560701:RT=1716404669:S=AA-AfjY_Bck6XVCw_H6FtNzqpw2m; PHPSESSID=pkontq97ds4u0gamvoukukdtu4; pantip_sessions=mPzjt4MeQzjnaqwIfMdaFCMUUuqAosPBzorkYt8WFuhFhKgOEN%2B3GWbZXfvM0MOcT2KuWNFx70hLWvvlRk%2FbcwxcIqN3MtNmOnC1pEUqKgeT%2BWlefYzBCRX4GmAArdicwqHrAWauY3dSlr2vvtqKLj9NIB31dn4O4L9LlPwZuvRUesiee3mgb1g1173Km6ihz%2FbBeO9nK0R30VWmymtMBVEXsdFVeiNjpv06XKx%2FYG7qFwZdrQF7qYii6gyuqXWaOJ0nPlFSKf%2FtZwtTQsf2QgJXEGPQwEWG70s2C3vnCdyYQv%2B%2Bnz1wiNCpn1CHTe%2FQ%2F6e2pV1vBfPMCQ92K%2Bu7aw%3D%3D; _gid=GA1.2.1862776857.1716660469; ka_sid=Kj8ukNvv9eQfPtLLGBTHW9; freq.5f73e63e47e7040e00000000=1; innity.dmp.cks.innity=1; innity.dmp.254.sess.id=37261285.254.1716660470758; _dc_gtm_UA-10478864-2=1; _ga=GA1.1.756706637.1712560699; innity.dmp.254.sess=4.1716660470758.1716661729481.1716661740485; _ga_ZMC2WGXL4Z=GS1.1.1716660468.7.1.1716661746.42.0.0',
          Referer: 'https://pantip.com/',
          'Referrer-Policy': 'strict-origin-when-cross-origin',
        },
        body: null,
        method: 'GET',
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    return null;
  }
}

export async function getSuggestTopicBehavior() {
  try {
    const response = await fetch(
      'https://pantip.com/api/forum-service/home/get_suggest_topic_behavior?tracking_code=sbm4ai1s974a3xUiKxEuz',
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          'accept-language': 'en-US,en;q=0.9',
          'cache-control': 'no-cache',
          pragma: 'no-cache',
          priority: 'u=1, i',
          ptauthorize: 'Basic dGVzdGVyOnRlc3Rlcg==',
          'sec-ch-ua':
            '"Microsoft Edge";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
          'sec-ch-ua-mobile': '?1',
          'sec-ch-ua-platform': '"Android"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          cookie:
            'pantip_visitc=sbm4ai1s974a3xUiKxEuz; ka_iid=AodcLUUuLYoct3pGfDGibK; iUUID=4348f7c93ab70392f0f1749f9808a91d; pantip_ha=20240522222237; _cc_id=9a7fa8733d06583baa4294aea0ee8481; panoramaId_expiry=1716996157708; panoramaId=cc5254420c0600bc627df10d2aca4945a70251f8d6757ad91db50b7052652cea; panoramaIdType=panoIndiv; cto_bundle=76JhI180MWxjZ2NhN281NUJ2SVVvWDBTdkVrZWdzWDRHS0RZZjJhMkE1TFlKb0tSTnBrTjBrQ0NsVUglMkJwM08lMkJRemFxVEZ2MFo4Yk5jeE5RbDFUYVBZYzRqem0lMkJrNEN1RXgzN2R5dmZMOXlmJTJCMVFLT3hISCUyRlVqWDJtWFhIcndzMWJiVU8; rlr=30408046; __gads=ID=f4be661d656ce5b4:T=1712560701:RT=1716404669:S=ALNI_MaIQGoxzUGoiQQhPb3M-76ZFebA1w; __gpi=UID=00000de3fd93494e:T=1712560701:RT=1716404669:S=ALNI_MYONSMNqNVFWmhATGVfsTFxSq8ABA; __eoi=ID=4e294814b38e656d:T=1712560701:RT=1716404669:S=AA-AfjY_Bck6XVCw_H6FtNzqpw2m; PHPSESSID=pkontq97ds4u0gamvoukukdtu4; pantip_sessions=mPzjt4MeQzjnaqwIfMdaFCMUUuqAosPBzorkYt8WFuhFhKgOEN%2B3GWbZXfvM0MOcT2KuWNFx70hLWvvlRk%2FbcwxcIqN3MtNmOnC1pEUqKgeT%2BWlefYzBCRX4GmAArdicwqHrAWauY3dSlr2vvtqKLj9NIB31dn4O4L9LlPwZuvRUesiee3mgb1g1173Km6ihz%2FbBeO9nK0R30VWmymtMBVEXsdFVeiNjpv06XKx%2FYG7qFwZdrQF7qYii6gyuqXWaOJ0nPlFSKf%2FtZwtTQsf2QgJXEGPQwEWG70s2C3vnCdyYQv%2B%2Bnz1wiNCpn1CHTe%2FQ%2F6e2pV1vBfPMCQ92K%2Bu7aw%3D%3D; _gid=GA1.2.1862776857.1716660469; ka_sid=Kj8ukNvv9eQfPtLLGBTHW9; freq.5f73e63e47e7040e00000000=1; innity.dmp.cks.innity=1; innity.dmp.254.sess.id=37261285.254.1716660470758; _dc_gtm_UA-10478864-2=1; _ga=GA1.1.756706637.1712560699; innity.dmp.254.sess=4.1716660470758.1716661729481.1716661740485; _ga_ZMC2WGXL4Z=GS1.1.1716660468.7.1.1716661746.42.0.0',
          Referer: 'https://pantip.com/',
          'Referrer-Policy': 'strict-origin-when-cross-origin',
        },
        body: null,
        method: 'GET',
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    return null;
  }
}

export async function getSuggestTopicPopular() {
  try {
    const response = await fetch(
      'https://pantip.com/api/forum-service/home/get_suggest_topic_popular',
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          'accept-language': 'en-US,en;q=0.9',
          'cache-control': 'no-cache',
          'content-type': 'application/x-www-form-urlencoded',
          pragma: 'no-cache',
          priority: 'u=1, i',
          ptauthorize: 'Basic dGVzdGVyOnRlc3Rlcg==',
          'sec-ch-ua':
            '"Microsoft Edge";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
          'sec-ch-ua-mobile': '?1',
          'sec-ch-ua-platform': '"Android"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          cookie:
            'pantip_visitc=sbm4ai1s974a3xUiKxEuz; ka_iid=AodcLUUuLYoct3pGfDGibK; iUUID=4348f7c93ab70392f0f1749f9808a91d; pantip_ha=20240522222237; _cc_id=9a7fa8733d06583baa4294aea0ee8481; panoramaId_expiry=1716996157708; panoramaId=cc5254420c0600bc627df10d2aca4945a70251f8d6757ad91db50b7052652cea; panoramaIdType=panoIndiv; cto_bundle=76JhI180MWxjZ2NhN281NUJ2SVVvWDBTdkVrZWdzWDRHS0RZZjJhMkE1TFlKb0tSTnBrTjBrQ0NsVUglMkJwM08lMkJRemFxVEZ2MFo4Yk5jeE5RbDFUYVBZYzRqem0lMkJrNEN1RXgzN2R5dmZMOXlmJTJCMVFLT3hISCUyRlVqWDJtWFhIcndzMWJiVU8; rlr=30408046; __gads=ID=f4be661d656ce5b4:T=1712560701:RT=1716404669:S=ALNI_MaIQGoxzUGoiQQhPb3M-76ZFebA1w; __gpi=UID=00000de3fd93494e:T=1712560701:RT=1716404669:S=ALNI_MYONSMNqNVFWmhATGVfsTFxSq8ABA; __eoi=ID=4e294814b38e656d:T=1712560701:RT=1716404669:S=AA-AfjY_Bck6XVCw_H6FtNzqpw2m; PHPSESSID=pkontq97ds4u0gamvoukukdtu4; pantip_sessions=mPzjt4MeQzjnaqwIfMdaFCMUUuqAosPBzorkYt8WFuhFhKgOEN%2B3GWbZXfvM0MOcT2KuWNFx70hLWvvlRk%2FbcwxcIqN3MtNmOnC1pEUqKgeT%2BWlefYzBCRX4GmAArdicwqHrAWauY3dSlr2vvtqKLj9NIB31dn4O4L9LlPwZuvRUesiee3mgb1g1173Km6ihz%2FbBeO9nK0R30VWmymtMBVEXsdFVeiNjpv06XKx%2FYG7qFwZdrQF7qYii6gyuqXWaOJ0nPlFSKf%2FtZwtTQsf2QgJXEGPQwEWG70s2C3vnCdyYQv%2B%2Bnz1wiNCpn1CHTe%2FQ%2F6e2pV1vBfPMCQ92K%2Bu7aw%3D%3D; _gid=GA1.2.1862776857.1716660469; ka_sid=Kj8ukNvv9eQfPtLLGBTHW9; freq.5f73e63e47e7040e00000000=1; innity.dmp.cks.innity=1; innity.dmp.254.sess.id=37261285.254.1716660470758; _dc_gtm_UA-10478864-2=1; _ga=GA1.1.756706637.1712560699; innity.dmp.254.sess=4.1716660470758.1716661729481.1716661740485; _ga_ZMC2WGXL4Z=GS1.1.1716660468.7.1.1716661746.42.0.0',
          Referer: 'https://pantip.com/',
          'Referrer-Policy': 'strict-origin-when-cross-origin',
        },
        body: 'type=room&limit=3&ignore_list%5B0%5D=siliconvalley',
        method: 'POST',
      },
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    return null;
  }
}

export async function getPantipPick() {
  try {
    const response = await fetch(
      'https://pantip.com/api/forum-service/home/get_pantip_pick?limit=20&id=bnVsbA%3D%3D&next_id=1716616800000',
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          'accept-language': 'en-US,en;q=0.9',
          'cache-control': 'no-cache',
          pragma: 'no-cache',
          priority: 'u=1, i',
          ptauthorize: 'Basic dGVzdGVyOnRlc3Rlcg==',
          'sec-ch-ua':
            '"Microsoft Edge";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
          'sec-ch-ua-mobile': '?1',
          'sec-ch-ua-platform': '"Android"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          cookie:
            'pantip_visitc=sbm4ai1s974a3xUiKxEuz; ka_iid=AodcLUUuLYoct3pGfDGibK; iUUID=4348f7c93ab70392f0f1749f9808a91d; pantip_ha=20240522222237; _cc_id=9a7fa8733d06583baa4294aea0ee8481; panoramaId_expiry=1716996157708; panoramaId=cc5254420c0600bc627df10d2aca4945a70251f8d6757ad91db50b7052652cea; panoramaIdType=panoIndiv; rlr=30408046; PHPSESSID=pkontq97ds4u0gamvoukukdtu4; _gid=GA1.2.1862776857.1716660469; freq.5f73e63e47e7040e00000000=1; innity.dmp.cks.innity=1; pantip_sessions=LvyDB%2F1b0Dy1WnpIsfEoEGOnpg2QIhTLZqBHBpRNbC78KqZv47F2qTaRDaIEDQB2RgcLe403Gsu1QU26Lb%2BWTo5vUisng0CTVKJ4xejG0ANemdqDKUz0ndvytZ93EWWrJedup8EFhzo5DtEnCUwspflBBMVlC5mmFMUyK03XwQJJbl8HSJGk2UHjVx4RuO6nEEL8krBJx3PXheaykTP5H5qYr8nJaElEnq4sHzFqrZQJWbKRAjfIkRFuiNJTeMnv9V5wQ5W3nzltYf5Z0zl75mkLcoAnEiAKb5C5r8UUefE9dmS7omaWAGZQxudK2oTiYZ2TRHN%2FMWikcPCjS0SEiQ%3D%3D; ptpolicy=1; __gads=ID=f4be661d656ce5b4:T=1712560701:RT=1716731691:S=ALNI_MaIQGoxzUGoiQQhPb3M-76ZFebA1w; __gpi=UID=00000de3fd93494e:T=1712560701:RT=1716731691:S=ALNI_MYONSMNqNVFWmhATGVfsTFxSq8ABA; __eoi=ID=4e294814b38e656d:T=1712560701:RT=1716731691:S=AA-AfjY_Bck6XVCw_H6FtNzqpw2m; cto_bundle=j3MHCV9EaEpjUE1pQk9FdjFFYzc3VnYzOTh6JTJGb2hISFpCczFUdFFHdkdmUmtoS1ZtczdoOHdOZ1ZZM2xqWmVVSng3SjJpV1hUZ0NBQ3lCWGduSSUyRkJVb0dFeU9ZZWFkVCUyRndXc3VsRXFRTUtuTHpPZ3pTZzMzT00wVmRkSkNJcTE0aElNZmd0d05XZDdkJTJGdWVHWHBidTBrTjRyZyUzRCUzRA; _ga=GA1.1.756706637.1712560699; _ga_ZMC2WGXL4Z=GS1.1.1716729889.8.1.1716731901.60.0.0',
          Referer: 'https://pantip.com/',
          'Referrer-Policy': 'strict-origin-when-cross-origin',
        },
        body: null,
        method: 'GET',
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    return null;
  }
}

export async function getPantipHitz() {
  try {
    const response = await fetch(
      'https://pantip.com/api/forum-service/home/get_pantip_now?limit=20&id=bnVsbA%3D%3D&next_id=1716654725634',
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          'accept-language': 'en-US,en;q=0.9',
          'cache-control': 'no-cache',
          pragma: 'no-cache',
          priority: 'u=1, i',
          ptauthorize: 'Basic dGVzdGVyOnRlc3Rlcg==',
          'sec-ch-ua':
            '"Microsoft Edge";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
          'sec-ch-ua-mobile': '?1',
          'sec-ch-ua-platform': '"Android"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          cookie:
            'pantip_visitc=sbm4ai1s974a3xUiKxEuz; ka_iid=AodcLUUuLYoct3pGfDGibK; iUUID=4348f7c93ab70392f0f1749f9808a91d; pantip_ha=20240522222237; _cc_id=9a7fa8733d06583baa4294aea0ee8481; panoramaId_expiry=1716996157708; panoramaId=cc5254420c0600bc627df10d2aca4945a70251f8d6757ad91db50b7052652cea; panoramaIdType=panoIndiv; rlr=30408046; PHPSESSID=pkontq97ds4u0gamvoukukdtu4; _gid=GA1.2.1862776857.1716660469; freq.5f73e63e47e7040e00000000=1; innity.dmp.cks.innity=1; pantip_sessions=LvyDB%2F1b0Dy1WnpIsfEoEGOnpg2QIhTLZqBHBpRNbC78KqZv47F2qTaRDaIEDQB2RgcLe403Gsu1QU26Lb%2BWTo5vUisng0CTVKJ4xejG0ANemdqDKUz0ndvytZ93EWWrJedup8EFhzo5DtEnCUwspflBBMVlC5mmFMUyK03XwQJJbl8HSJGk2UHjVx4RuO6nEEL8krBJx3PXheaykTP5H5qYr8nJaElEnq4sHzFqrZQJWbKRAjfIkRFuiNJTeMnv9V5wQ5W3nzltYf5Z0zl75mkLcoAnEiAKb5C5r8UUefE9dmS7omaWAGZQxudK2oTiYZ2TRHN%2FMWikcPCjS0SEiQ%3D%3D; ptpolicy=1; __gads=ID=f4be661d656ce5b4:T=1712560701:RT=1716731691:S=ALNI_MaIQGoxzUGoiQQhPb3M-76ZFebA1w; __gpi=UID=00000de3fd93494e:T=1712560701:RT=1716731691:S=ALNI_MYONSMNqNVFWmhATGVfsTFxSq8ABA; __eoi=ID=4e294814b38e656d:T=1712560701:RT=1716731691:S=AA-AfjY_Bck6XVCw_H6FtNzqpw2m; cto_bundle=j3MHCV9EaEpjUE1pQk9FdjFFYzc3VnYzOTh6JTJGb2hISFpCczFUdFFHdkdmUmtoS1ZtczdoOHdOZ1ZZM2xqWmVVSng3SjJpV1hUZ0NBQ3lCWGduSSUyRkJVb0dFeU9ZZWFkVCUyRndXc3VsRXFRTUtuTHpPZ3pTZzMzT00wVmRkSkNJcTE0aElNZmd0d05XZDdkJTJGdWVHWHBidTBrTjRyZyUzRCUzRA; _ga=GA1.1.756706637.1712560699; _ga_ZMC2WGXL4Z=GS1.1.1716729889.8.1.1716731901.60.0.0',
          Referer: 'https://pantip.com/',
          'Referrer-Policy': 'strict-origin-when-cross-origin',
        },
        body: null,
        method: 'GET',
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    return null;
  }
}

export async function getSerch() {
  try {
    const response = await fetch(
      'https://pantip.com/api/search-service/search/query',
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          'accept-language': 'en-US,en;q=0.9',
          'cache-control': 'no-cache',
          'content-type': 'application/json;charset=UTF-8',
          pragma: 'no-cache',
          priority: 'u=1, i',
          ptauthorize: 'Basic dGVzdGVyOnRlc3Rlcg==',
          'sec-ch-ua':
            '"Microsoft Edge";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
          'sec-ch-ua-mobile': '?1',
          'sec-ch-ua-platform': '"Android"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          cookie:
            'pantip_visitc=sbm4ai1s974a3xUiKxEuz; ka_iid=AodcLUUuLYoct3pGfDGibK; iUUID=4348f7c93ab70392f0f1749f9808a91d; pantip_ha=20240522222237; _cc_id=9a7fa8733d06583baa4294aea0ee8481; panoramaId_expiry=1716996157708; panoramaId=cc5254420c0600bc627df10d2aca4945a70251f8d6757ad91db50b7052652cea; panoramaIdType=panoIndiv; rlr=30408046; PHPSESSID=pkontq97ds4u0gamvoukukdtu4; _gid=GA1.2.1862776857.1716660469; pantip_sessions=LvyDB%2F1b0Dy1WnpIsfEoEGOnpg2QIhTLZqBHBpRNbC78KqZv47F2qTaRDaIEDQB2RgcLe403Gsu1QU26Lb%2BWTo5vUisng0CTVKJ4xejG0ANemdqDKUz0ndvytZ93EWWrJedup8EFhzo5DtEnCUwspflBBMVlC5mmFMUyK03XwQJJbl8HSJGk2UHjVx4RuO6nEEL8krBJx3PXheaykTP5H5qYr8nJaElEnq4sHzFqrZQJWbKRAjfIkRFuiNJTeMnv9V5wQ5W3nzltYf5Z0zl75mkLcoAnEiAKb5C5r8UUefE9dmS7omaWAGZQxudK2oTiYZ2TRHN%2FMWikcPCjS0SEiQ%3D%3D; ptpolicy=1; cto_bundle=j3MHCV9EaEpjUE1pQk9FdjFFYzc3VnYzOTh6JTJGb2hISFpCczFUdFFHdkdmUmtoS1ZtczdoOHdOZ1ZZM2xqWmVVSng3SjJpV1hUZ0NBQ3lCWGduSSUyRkJVb0dFeU9ZZWFkVCUyRndXc3VsRXFRTUtuTHpPZ3pTZzMzT00wVmRkSkNJcTE0aElNZmd0d05XZDdkJTJGdWVHWHBidTBrTjRyZyUzRCUzRA; innity.dmp.cks.innity=1; innity.dmp.254.sess.id=37261285.254.1716754367256; freq.5f73e63e47e7040e00000000=1; __gads=ID=f4be661d656ce5b4:T=1712560701:RT=1716754369:S=ALNI_MaIQGoxzUGoiQQhPb3M-76ZFebA1w; __gpi=UID=00000de3fd93494e:T=1712560701:RT=1716754369:S=ALNI_MYONSMNqNVFWmhATGVfsTFxSq8ABA; __eoi=ID=4e294814b38e656d:T=1712560701:RT=1716754369:S=AA-AfjY_Bck6XVCw_H6FtNzqpw2m; ka_sid=Q46sRqFQzXY8TbAvBCxzmr; __gsas=ID=c9a2b5f3d15d4e6c:T=1716755334:RT=1716755334:S=ALNI_Ma0QVLvDITqfa4KVOpttFi5krwN4A; _dc_gtm_UA-10478864-2=1; _ga=GA1.2.756706637.1712560699; innity.dmp.254.sess=6.1716754367256.1716755332696.1716755346229; _ga_ZMC2WGXL4Z=GS1.1.1716754367.9.1.1716755363.29.0.0',
          Referer: 'https://pantip.com/search?q=how',
          'Referrer-Policy': 'strict-origin-when-cross-origin',
        },
        body: '{"keyword":"how","limit":8,"type":"all","show_btn_search":"false"}',
        method: 'POST',
      },
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    return null;
  }
}
