[![npm version](https://badge.fury.io/js/telegram-charts.svg)](https://badge.fury.io/js/telegram-charts)

# telegram-charts

> Simple, lightweight and low resource consuming Charts library, not customizable, have a set of charts. Final bundle is 30kb!

## Installation

To install and set up the library, run:

```sh
$ npm install telegram-charts
```

Or if you prefer using `Yarn`:

```sh
$ yarn add telegram-charts
```

## Usage

```tsx
import TelegramCharts from 'telegram-charts';

const chartData = [...];
const chartsContainer = document.getElementById('chart-container');

TelegramCharts.render(chartsContainer, chartData);
```


## Contributing

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Add your changes: `git add .`
4.  Commit your changes: `git commit -am 'Add some feature'`
5.  Push to the branch: `git push origin my-new-feature`
6.  Submit a pull request :sunglasses:


## Built With

* VSCode
* Vite
* Love


## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/gebeto/telegram-charts/tags).


## Authors

* **Yaroslav Nychkalo** - *Initial work* - [gebeto](https://github.com/gebeto)

See also the list of [contributors](https://github.com/gebeto/telegram-charts/contributors) who participated in this project.


## License

[MIT License](LICENSE) © Yaroslav Nychkalo