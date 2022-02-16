export default interface weatherInterface {
    name: string;
    main: {
        temp: number;
        humidity: number;
    }
}