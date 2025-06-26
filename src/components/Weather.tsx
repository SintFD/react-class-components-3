import axios from "axios";
import { Component } from "react";

type WeatherType = {
  name: string;
  temperature: number;
};

interface Props {
  city: string;
}

interface State {
  weather: WeatherType;
  isLoading: boolean;
}

export default class Weather extends Component<Props, State> {
  state: Readonly<State> = {
    weather: { name: "", temperature: 0 },
    isLoading: true,
  };
  getCoordinates = async () => {
    this.setState({ isLoading: true });

    try {
      const {
        data: [{ lon, lat, name }],
      } = await axios.get(
        `https://nominatim.openstreetmap.org/search?q=${this.props.city}&format=json&limit=1`
      );

      const {
        data: {
          current_weather: { temperature },
        },
      } = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
      );
      this.setState({ weather: { name: name, temperature: temperature } });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  componentDidMount() {
    this.getCoordinates();
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.city !== this.props.city) {
      this.getCoordinates();
    }
  }

  render() {
    const { name, temperature } = this.state.weather;
    return (
      <>
        {(this.state.isLoading && <div>Loading...</div>) || (
          <div>
            Город: {name}, Температура: {temperature} °C
          </div>
        )}
      </>
    );
  }
}
