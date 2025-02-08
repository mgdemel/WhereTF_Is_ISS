# WhereTF_Is_ISS
A simple app to track the location of the international space station since we are pretty bad at doing that with the naked eye... we will test using [Vercel's v0](https://v0.dev/) to help build the app's UI components.

## Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Step 1: working with v0
Our objective was to make v0 build a frontend for our app for us, and keep an open mind about the outcome.

We brainstormed how we as humans might go about displaying the data and came up with these ideas:
  - Charting ISS on a map
  - AR assisted location with a phone
  - A location card of the nearest city on Earth that the ISS is now hovering over

And decided that, if v0 doesn't give us a good result, we will negotiate with it towards the "Charting ISS on a map" approach.

We put this prompt into v0:
```
I want to build an app that shows me where the International Space Station is at any given time. The data I get from the API Looks like this:

{"name":"iss","id":25544,"latitude":49.324938069575,"longitude":42.297945225015,"altitude":424.45270385567,"velocity":27582.321250976,"visibility":"daylight","footprint":4530.0477985004,"timestamp":1738999379,"daynum":2460714.8076273,"solar_lat":-14.882332574028,"solar_lon":72.791671453219,"units":"kilometers"}
```
v0 provided us with some frontend code, that we added to this project manually, but couldn't give us a preview of what to expect:
![v0 preview not working because of a server error in the code it generated](./public/images/whomp.png)

But we could see that v0 went with the "Charting ISS on a map" approach, because the code it generated uses [leaflet](https://github.com/Leaflet/Leaflet).

## Step 2: agreeing/disagreeing with v0

