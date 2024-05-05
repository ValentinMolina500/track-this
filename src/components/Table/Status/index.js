export const StatusState = {
  Complete: "complete",
  InProgress: "in_progress",
  NotStarted: "not_started",
};

function Status(props) {
  const { status = Status.NotStarted } = props;

  console.log(status);
  const renderNotStarted = () => {
    return <span className="not-started-tag">
      Not Started
    </span>
  }

  const renderComplete = () => {
    return <span className="complete-tag">
      Complete
    </span>
  }
  
  const renderStatus = () => {
    switch (status) {
      case Status.NotStarted: 
        return renderNotStarted();
      case Status.Complete: 
        return renderComplete();
      default:
        return "boo"
    }
  }

  return renderStatus();
}

export default Status;