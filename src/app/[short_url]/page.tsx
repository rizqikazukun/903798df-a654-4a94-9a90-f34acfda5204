'use server'
import axios from 'axios'
import { BeURL } from '@/lib/Config'
import { RedirectType, notFound, redirect } from 'next/navigation'

const getDirection = async (short_url: string) : Promise<string> => {
  try {
    const redirectTo = await axios({
      method: 'get',
      url: `${BeURL}/shortener/${short_url}`
    })
    return redirectTo.data.url
  } catch (error) {
    return 'error'
  }
}

export default async function Redirect(prop: { params: { short_url: string } }): Promise<void> {

  const toDestination = await getDirection(prop.params.short_url)

  if (toDestination !== 'error') {
    redirect(toDestination, RedirectType.replace)
  } else {
    throw notFound()
  }
  
}
