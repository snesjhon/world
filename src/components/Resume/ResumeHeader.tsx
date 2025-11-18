interface Props {
  name: string;
  title: string;
  email: string;
  location: string;
  site: string;
}
export function ResumeHeader({ name, title, email, location, site }: Props) {
  return (
    <div className="resume-header">
      <h2>{name}</h2>
      <div className="flex">
        <div>
          <p>{title}</p>
        </div>
        <div className="flex">
          <p>{location}</p>
          <span>·</span>
          <p>{email}</p>
          <span>·</span>
          <p>{site}</p>
        </div>
      </div>
    </div>
  );
}
