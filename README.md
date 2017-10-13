# Eaze Front-End Homework
### Developed by [Bryan Nguyen](https://www.linkedin.com/in/bqnguyen1/)

A Giphy([docs](https://developers.giphy.com/docs/)) image gallery

## Getting Started

```sh
git clone https://github.com/boybutcher/homework-front-end.git
cd homework-front-end

npm install
npm start
```

## Usage Guide (as of 9/15/2017)

Upon launch, the app will grab the top 25 trending GIFs from the Giphy API.

If the body doesn't fill the viewport, it will continue to fetch. When scrolled to the bottom of the body, the app will automatically fetch more GIFs in batches of 25 items.

When hovering on a thumbnail, it will show a low resolution preview of the GIF. Clicking opens a modal which shows the original GIF, user meta data, and the upload date/time.

Highlighting the image in the modal allows you to view a number of source links if that is shared.

## Planned Updates

- [ ] allow searches at different end points ([search](https://developers.giphy.com/docs/#operation--gifs-search-get)/[random(https://developers.giphy.com/docs/#operation--gifs-random-get)])
- [ ] favoriting images persistently, storing favorites via localStorage
- [ ] store more post data in the modal
- [ ] general styling

## Stack

- Client
  - React via create-react-app
  - Requests via Fetch API
