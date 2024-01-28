'use client'
import { ComponentPassingType, ShortUrlResultType } from '@/lib/TypeInterface'
import Link from 'next/link'
import React from 'react'
import QRCode from 'react-qr-code'
import * as AntIcons from '@ant-design/icons'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Countdown from 'react-countdown';
import d3ToPng from 'd3-svg-to-png'

export default function ShortResultCard(props: ComponentPassingType) {
  const AppURL: string | undefined = props.AppURL
  const url: ShortUrlResultType | any = props.data

  const qrDownloadHandler = React.useCallback(async (selector: string, imageName: string): Promise<void> => {
    await d3ToPng(selector, imageName, {
      scale: 4,
      format: 'png',
      download: true
    })
  }, [])

  return (
    <div className=" border rounded-lg flex flex-wrap justify-between items-center content-center p-5 m-2 gap-2">
      <div className='flex flex-wrap gap-5'>
        <QRCode className='mx-auto'
          size={100}
          id={`QR-${url.url_short}`}
          value={`${AppURL}/${url.url_short}`} />

        <div className="flex flex-col justify-center gap-1 min-w-[100px] max-w-[400px]">
          <Link className='hover:text-red-800 break-all font-bold' href={`${AppURL}/${url.url_short}`}>
            {`${AppURL}/${url.url_short}`}
          </Link>
          <p className="break-all">
            {url.url_original.slice(0, 80)}...
          </p>
          <p>
            Expire : <Countdown date={Number(url.url_ttl)} />
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">

        <button className="flex rounded-full p-2 gap-2 border items-center hover:text-red-800 hover:border-red-700"
          onClick={() => { qrDownloadHandler(`#QR-${url.url_short}`, `QR-${url.url_original}`) }}>
          <AntIcons.CloudDownloadOutlined /> <p>Download QR</p>
        </button>

        <CopyToClipboard text={`${AppURL}/${url.url_short}`}>
          <button className="flex rounded-full p-2 gap-2 border items-center hover:text-red-800 hover:border-red-700">
            <AntIcons.CopyOutlined /> <p>Copy URL</p>
          </button>
        </CopyToClipboard>
      </div>
    </div>
  )
}
