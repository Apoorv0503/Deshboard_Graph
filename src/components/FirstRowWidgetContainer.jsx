import Widget from './Widget'
import AnimatedProgressBar from './AnimatedProgressBar'

const FirstRowWidgetContainer = () => {
  return (
    <div className="w-full flex gap-4">
        <div className="w-3/4 flex gap-4">
          <Widget
            delay={75}
            title={"Revenues"}
            value={"15"}
            subTitle={"Increase compared to last week"}
            greenArrow={true}
            clickableLink={"Revenues report"}
          />
          <Widget
            delay={100}
            title={"Lost Deals"}
            value={"4"}
            subTitle={"You closed 96 out of 100 deals"}
            greenArrow={false}
            clickableLink={"All deals"}
          />
        </div>
        <div className="w-1/4 flex">
          <Widget delay={80} title={"Quarter goal"} clickableLink={"All goals"}>
            <AnimatedProgressBar targetProgress={84} isProgressbar />
          </Widget>
        </div>
      </div>
  )
}

export default FirstRowWidgetContainer