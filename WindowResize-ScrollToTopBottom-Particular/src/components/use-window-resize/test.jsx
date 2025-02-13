import useWindowResize from ".";

export default function UseWindowResizeTest() {
  const windowSize = useWindowResize();
  const { width, height } = windowSize;

  return (
    <div>
      <h3>Use Window resize Hook</h3>
      <p>Width is {width}</p>
      <p>Height is {height}</p>
    </div>
  );
}
