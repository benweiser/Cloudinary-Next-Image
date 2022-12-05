import { setConfig } from 'cloudinary-build-url'

setConfig({
  cloudName: 'rentpath',
  secureDistribution: 'rentpath-res.cloudinary.com',
  privateCdn: true
})
