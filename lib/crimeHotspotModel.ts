import { kmeans } from 'ml-kmeans'

interface CrimeData {
  latitude: number
  longitude: number
  crimeType: string
}

export function predictHotspots(crimeData: CrimeData[], k: number = 5) {
  const data = crimeData.map((crime) => [crime.latitude, crime.longitude])

  // Perform K-Means clustering with default options
  const result = kmeans(data, k, { initialization: 'kmeans++' })

  const hotspots = result.centroids.map((centroid, index) => ({
    latitude: centroid[0],
    longitude: centroid[1],
    intensity: result.clusters.filter((c) => c === index).length,
  }))

  return hotspots
}
