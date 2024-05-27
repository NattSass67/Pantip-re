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

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    return null;
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
