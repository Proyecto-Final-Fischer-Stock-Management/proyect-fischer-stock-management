type Props = {
  image: string;
  styles?: string;
  openFunction: () => void;
};

function ImageButton(props: Props) {
  const { image, styles, openFunction } = props;

  return (
    <button onClick={openFunction} className={`${styles}`}>
      <img src={image} />
    </button>
  );
}

export default ImageButton;
