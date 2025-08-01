[![npm version](https://badge.fury.io/js/telegram-charts.svg)](https://badge.fury.io/js/telegram-charts)

# telegram-charts

> Simple, lightweight and low resource consuming Charts library, not customizable, have a set of charts. Final bundle is 30kb!

<table>
   <tr>
      <td>
         <picture>
            <source media="(prefers-color-scheme: dark)" srcset="https://github.com/user-attachments/assets/9cec7aa3-ea86-4021-b804-dfdc4207b865">
            <source media="(prefers-color-scheme: light)" srcset="https://github.com/user-attachments/assets/70c5cdac-3232-43a2-8dc3-f49892ae5f4f">
            <img alt="Fallback image description" src="https://github.com/user-attachments/assets/70c5cdac-3232-43a2-8dc3-f49892ae5f4f">
         </picture>
      </td>
      <td>
         <picture>
            <source media="(prefers-color-scheme: dark)" srcset="https://github.com/user-attachments/assets/4c9c93d8-749d-4b7e-87b9-27d68bab2d3a">
            <source media="(prefers-color-scheme: light)" srcset="https://github.com/user-attachments/assets/661239cf-a1d0-407d-9d97-c4bd60851dfc">
            <img alt="Fallback image description" src="https://github.com/user-attachments/assets/661239cf-a1d0-407d-9d97-c4bd60851dfc">
         </picture>
      </td>
   </tr>
   <tr>
      <td>
         <picture>
            <source media="(prefers-color-scheme: dark)" srcset="https://github.com/user-attachments/assets/4fe0c3b1-ce32-4cea-b0ab-21374fd0f4ee">
            <source media="(prefers-color-scheme: light)" srcset="https://github.com/user-attachments/assets/96284192-9696-4019-aa5b-44b891370944">
            <img alt="Fallback image description" src="https://github.com/user-attachments/assets/96284192-9696-4019-aa5b-44b891370944">
         </picture>
      </td>
      <td>
         <picture>
            <source media="(prefers-color-scheme: dark)" srcset="https://github.com/user-attachments/assets/e32f26d6-ee3f-4161-accd-50cff9c27526">
            <source media="(prefers-color-scheme: light)" srcset="https://github.com/user-attachments/assets/1efa7ff8-7a4e-4d27-8752-fa18f2a17b81">
            <img alt="Fallback image description" src="https://github.com/user-attachments/assets/1efa7ff8-7a4e-4d27-8752-fa18f2a17b81">
         </picture>
      </td>
   </tr>
   <tr>
      <td>
         <picture>
            <source media="(prefers-color-scheme: dark)" srcset="https://github.com/user-attachments/assets/893dc1c2-1ef5-4047-8cea-f11394d162ad">
            <source media="(prefers-color-scheme: light)" srcset="https://github.com/user-attachments/assets/ee4b66ec-c5cf-4545-9b46-51cec536aa84">
            <img alt="Fallback image description" src="https://github.com/user-attachments/assets/ee4b66ec-c5cf-4545-9b46-51cec536aa84">
         </picture>
      </td>
      <td>
         <picture>
            <source media="(prefers-color-scheme: dark)" srcset="https://github.com/user-attachments/assets/664073a3-4171-4fcd-b689-a491ff702edf">
            <source media="(prefers-color-scheme: light)" srcset="https://github.com/user-attachments/assets/57fa312a-1f34-470a-aa8a-a3d62e11d39f">
            <img alt="Fallback image description" src="https://github.com/user-attachments/assets/57fa312a-1f34-470a-aa8a-a3d62e11d39f">
         </picture>
      </td>
   </tr>
</table>


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