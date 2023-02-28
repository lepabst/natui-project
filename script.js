const target = document.getElementById('target')

const videoElement = document.querySelector('#input-video');
const canvasElement = document.querySelector('#output-canvas');
const presentation = document.querySelector('#presentation');
const presentationContext = presentation.getContext('2d')
const meetingTools = document.querySelector('#meeting-tools');
const canvasCtx = canvasElement.getContext('2d');
const colorElement = document.querySelector('#current-color')
const colorPicker = document.querySelector('#color-picker');
const activeTool = document.querySelector('#active-tool')
const activeToolImage = document.querySelector('#active-tool img')
const wheel = document.querySelector('#wheel')
const wheelGesture = document.querySelector('#wheel-gesture')
const wheelGestureImage = document.querySelector('#wheel-gesture img')
const wheelGestureText = document.querySelector('#wheel-gesture > span')
const wheelWrapper = document.querySelector('#wheel-wrapper')
const videoRow = document.querySelector('#video-row')
const navigation = document.querySelector('#navigation')
const container = document.querySelector('.container')
const presentationDrawings = document.querySelector('#presentation-drawings');
const drawingsContext = presentationDrawings.getContext('2d');
const presentationContainter = document.querySelector('#presentation-container');
const primaryHandRight = document.querySelector('#right-handed');
const primaryHandLeft = document.querySelector('#left-handed');
const lockCenter = document.querySelector('#lock-container');
const lockedGestures = document.querySelector('#block-gestures');
const lockedGesturesText = document.querySelector('#block-gestures > span')
const switchSlide = document.querySelectorAll('.switch-slide')

const ThumbsUpGesture = new fp.GestureDescription('thumbsUp');
ThumbsUpGesture.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl);
ThumbsUpGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl);
ThumbsUpGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl);
ThumbsUpGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl);
ThumbsUpGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl);
ThumbsUpGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUp, 1.0)

const TwoGesture = new fp.GestureDescription('toolTwo');
TwoGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl);
TwoGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl);
TwoGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl);
TwoGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.HalfCurl);
TwoGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl);
TwoGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl);
TwoGesture.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 1.0)
TwoGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 1.0)
TwoGesture.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpLeft, 1.0)
TwoGesture.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 1.0)
TwoGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpLeft, 1.0)
TwoGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpRight, 1.0)

const ThreeGesture = new fp.GestureDescription('toolThree');
ThreeGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl);
ThreeGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl);
ThreeGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.NoCurl);
ThreeGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl);
ThreeGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl);
ThreeGesture.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 1.0)
ThreeGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 1.0)
ThreeGesture.addDirection(fp.Finger.Ring, fp.FingerDirection.VerticalUp, 1.0)

const FullscreenOneGesture = new fp.GestureDescription('fullscreenOne');
FullscreenOneGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl);
FullscreenOneGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl);
FullscreenOneGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl);
FullscreenOneGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl);
FullscreenOneGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl);
FullscreenOneGesture.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 0.6)
FullscreenOneGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalLeft, 0.4)
FullscreenOneGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalRight, 0.4)


const FullscreenTwoGesture = new fp.GestureDescription('fullscreenTwo');
FullscreenTwoGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl);
FullscreenTwoGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl);
FullscreenTwoGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl);
FullscreenTwoGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl);
FullscreenTwoGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl);
FullscreenTwoGesture.addDirection(fp.Finger.Index, fp.FingerDirection.HorizontalLeft, 0.6)
FullscreenTwoGesture.addDirection(fp.Finger.Index, fp.FingerDirection.HorizontalRight, 0.6)
FullscreenTwoGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalDown, 0.6)
FullscreenTwoGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalDownLeft, 0.4)
FullscreenTwoGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalDownRight, 0.4)

const FullscreenThreeGesture = new fp.GestureDescription('fullscreenThree');
FullscreenThreeGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl);
FullscreenThreeGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl);
FullscreenThreeGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl);
FullscreenThreeGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl);
FullscreenThreeGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl);
FullscreenThreeGesture.addDirection(fp.Finger.Index, fp.FingerDirection.HorizontalLeft, 0.6)
FullscreenThreeGesture.addDirection(fp.Finger.Index, fp.FingerDirection.HorizontalRight, 0.6)
FullscreenThreeGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUp, 0.6)
FullscreenThreeGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpLeft, 0.4)
FullscreenThreeGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpRight, 0.4)


const FourGesture = new fp.GestureDescription('toolFour');
FourGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl);
FourGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl);
FourGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.NoCurl);
FourGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl);
FourGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl);
FourGesture.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 1.0)
FourGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 1.0)
FourGesture.addDirection(fp.Finger.Ring, fp.FingerDirection.VerticalUp, 1.0)
FourGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.VerticalUp, 1.0)

const FistGesture = new fp.GestureDescription('fist');
FistGesture.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl);
FistGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl);
FistGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl);
FistGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl);
FistGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl);

const ThumbsDownGesture = new fp.GestureDescription('thumbsDown');
ThumbsDownGesture.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl);
ThumbsDownGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl);
ThumbsDownGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl);
ThumbsDownGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl);
ThumbsDownGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl);
ThumbsDownGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalDown, 1.0)

const FlatHandGesture = new fp.GestureDescription('flatHand');
FlatHandGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl);
FlatHandGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl);
FlatHandGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.NoCurl);
FlatHandGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl);
FlatHandGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl);
FlatHandGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUp, 1.0)
FlatHandGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 1.0)
FlatHandGesture.addDirection(fp.Finger.Ring, fp.FingerDirection.VerticalUp, 1.0)
FlatHandGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.VerticalUp, 1.0)
FlatHandGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUp, 1.0)

const FlatHandRightGesture = new fp.GestureDescription('flatHandRight');
FlatHandRightGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl);
FlatHandRightGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl);
FlatHandRightGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.NoCurl);
FlatHandRightGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl);
FlatHandRightGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl);
FlatHandRightGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalRight, 1.0)
FlatHandRightGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.HorizontalRight, 1.0)
FlatHandRightGesture.addDirection(fp.Finger.Ring, fp.FingerDirection.HorizontalRight, 1.0)
FlatHandRightGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.HorizontalRight, 1.0)
FlatHandRightGesture.addDirection(fp.Finger.Index, fp.FingerDirection.HorizontalRight, 1.0)
FlatHandRightGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpRight, 1.0)
FlatHandRightGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpRight, 1.0)
FlatHandRightGesture.addDirection(fp.Finger.Ring, fp.FingerDirection.DiagonalUpRight, 1.0)
FlatHandRightGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpRight, 1.0)
FlatHandRightGesture.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 1.0)

const FlatHandLeftGesture = new fp.GestureDescription('flatHandLeft');
FlatHandLeftGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl);
FlatHandLeftGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl);
FlatHandLeftGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.NoCurl);
FlatHandLeftGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl);
FlatHandLeftGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl);
FlatHandLeftGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalLeft, 1.0)
FlatHandLeftGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.HorizontalLeft, 1.0)
FlatHandLeftGesture.addDirection(fp.Finger.Ring, fp.FingerDirection.HorizontalLeft, 1.0)
FlatHandLeftGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.HorizontalLeft, 1.0)
FlatHandLeftGesture.addDirection(fp.Finger.Index, fp.FingerDirection.HorizontalLeft, 1.0)
FlatHandLeftGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpLeft, 1.0)
FlatHandLeftGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpLeft, 1.0)
FlatHandLeftGesture.addDirection(fp.Finger.Ring, fp.FingerDirection.DiagonalUpLeft, 1.0)
FlatHandLeftGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpLeft, 1.0)
FlatHandLeftGesture.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpLeft, 1.0)

const PointGesture = new fp.GestureDescription('point');
PointGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl);
PointGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.HalfCurl);
PointGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl);
PointGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl);
PointGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl);
PointGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl);
PointGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl);

// const PinchGesture = new fp.GestureDescription('pinch');
// PinchGesture.addCurl(fp.Finger.Index, fp.FingerCurl.HalfCurl);
// PinchGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl);
// PinchGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl);
// PinchGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl);
// PinchGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl);

const gestureEstimator = new fp.GestureEstimator([FullscreenOneGesture, FullscreenTwoGesture, FullscreenThreeGesture, FistGesture, FlatHandGesture, FlatHandLeftGesture, FlatHandRightGesture]); // OneGesture, TwoGesture, ThreeGesture, AlternativeThreeGesture, FourGesture

var presentationReady = true
var lastPrevSceneSwitch = 0;
var lastNextSceneSwitch = 0;
var primaryHand = 'right';
var secondaryHand = 'left';

const scenes = []

for(let i = 1; i <= 18; i++) {
  scenes.push({
    image: 'presentation/' + i + '.png',
    currentState: null
  })
}

async function loadScenes() {
  for(let i = 0; i < scenes.length; i++) {
    const img = new Image
    img.src = scenes[i].image
    await new Promise(resolve => {
      img.onload = () => {
        scenes[i].image = img
        resolve()
      }
    })
  }
}

loadScenes()

var currentScene = 0
var detailsShown = true

function drawPresentation(useCurrentState = false) {
  drawingsContext.clearRect(0, 0, presentation.width, presentation.height);
  if(useCurrentState && scenes[currentScene].currentState) {
    if(scenes[currentScene].currentState.complete) {
      drawingsContext.drawImage(scenes[currentScene].currentState, 0, 0, presentation.width, presentation.height)
    }
    else {
      scenes[currentScene].currentState.onload = function() {
        drawingsContext.drawImage(scenes[currentScene].currentState, 0, 0, presentation.width, presentation.height)
      }
    }
  }
  presentationContext.drawImage(scenes[currentScene].image, 0, 0, presentation.width, presentation.height)
}

const resizePresentation = () => {
  const stateImg = new Image
  stateImg.src = presentationDrawings.toDataURL()
  scenes[currentScene].currentState = stateImg

  presentation.setAttribute('height', window.innerHeight - canvasElement.clientHeight - meetingTools.clientHeight)
  presentation.setAttribute('width', parseInt(presentation.getAttribute('height')) * 1.75)
  presentationDrawings.setAttribute('height', parseInt(presentation.getAttribute('height')));
  presentationDrawings.setAttribute('width', parseInt(presentation.getAttribute('width')));
  presentationContainter.style.width = presentation.width + 'px'
  presentationContainter.style.height = presentation.height + 'px'
  wheelWrapper.style.width = presentation.width + 'px'
  wheelWrapper.style.height = presentation.height + 'px'
  wheelWrapper.style.top = document.querySelector('#video-row').clientHeight + 'px'
  wheel.setAttribute('height', wheelWrapper.style.height)
  drawPresentation(true)
}

window.onload = async() => {
  resizePresentation()

  // const objDetectionModel = await cocoSsd.load({
  //   base: 'mobilenet_v2'
  // })

  const handParts = {
    wrist: 0,
    thumb: { base: 1, middle: 2, topKnuckle: 3, tip: 4 },
    indexFinger: { base: 5, middle: 6, topKnuckle: 7, tip: 8 },
    middleFinger: { base: 9, middle: 10, topKnuckle: 11, tip: 12 },
    ringFinger: { base: 13, middle: 14, topKnuckle: 15, tip: 16 },
    pinky: { base: 17, middle: 18, topKnuckle: 19, tip: 20 },
  };

  function getElementCoords(element) {
    const rect = element.getBoundingClientRect();
    const elementTop = rect.top / window.innerHeight;
    const elementBottom = rect.bottom / window.innerHeight;
    const elementLeft = rect.left / window.innerWidth;
    const elementRight = rect.right / window.innerWidth;
    return { elementTop, elementBottom, elementLeft, elementRight };
  };

  function isElementPinched({ pinchX, pinchY, elementTop, elementBottom, elementLeft, elementRight }) {
    const isPinchInXRange = elementLeft <= pinchX && pinchX <= elementRight;
    const isPinchInYRange = elementTop <= pinchY && pinchY <= elementBottom;
    return isPinchInXRange && isPinchInYRange;
  };

  function getPinchedElement({ pinchX, pinchY, elements }) {
    let grabbedElement;
    for (const element of elements) {
      const elementCoords = getElementCoords(element);
      if (isElementPinched({ pinchX, pinchY, ...elementCoords })) {
        grabbedElement = {
          domNode: element,
          coords: {
            x: elementCoords.elementLeft,
            y: elementCoords.elementTop },

          offsetFromCorner: {
            x: pinchX - elementCoords.elementLeft,
            y: pinchY - elementCoords.elementTop } };


        const isTopElement = element === state.lastGrabbedElement;
        if (isTopElement) {
          return grabbedElement;
        }
      }
    }
    return grabbedElement;
  };

  function rgbToHex(r, g, b, a) {
    if (r > 255 || g > 255 || b > 255)
        throw "Invalid color component";
    return ((r << 16) | (g << 8) | b).toString(16) + a.toString(16);
  }

  function getColorAt(context, pos) {
    const p = context.getImageData(pos.x, pos.y, 1, 1).data;
    return "#" + ("000000" + rgbToHex(p[0], p[1], p[2], p[3])).slice(-8);
  }

  function isPinched(handData) {
    if (isHandAvailable(handData)) {
      const fingerTip = handData.multiHandLandmarks[0][handParts.indexFinger.tip];
      const thumbTip = handData.multiHandLandmarks[0][handParts.thumb.tip];
      const distance = {
        x: Math.abs(fingerTip.x - thumbTip.x),
        y: Math.abs(fingerTip.y - thumbTip.y),
        z: Math.abs(fingerTip.z - thumbTip.z) };

      const areFingersCloseEnough = distance.x < 0.08 && distance.y < 0.08 && distance.z < 0.11;
      return areFingersCloseEnough;
    }
    return false;
  }

  function isHandAvailable(handData) {
    return handData.multiHandLandmarks.length;
  }

  function setPrimaryHand(h) {
    primaryHand = h;
    secondaryHand = h === 'right' ? 'left' : 'right';
  }

  primaryHandRight.onclick = function() {
    setPrimaryHand('right');
    primaryHandRight.classList.add('active');
    primaryHandLeft.classList.remove('active');
  }

  primaryHandLeft.onclick = function() {
    setPrimaryHand('left');
    primaryHandRight.classList.remove('active');
    primaryHandLeft.classList.add('active');
  }

  lockedGestures.onclick = function() {
    const newMode = currentMode === 'blocked' ? 'default' : 'blocked';
    switchMode(newMode)
  }

  wheelGesture.onclick = function() {
    const newMode = currentMode === 'wheel' ? 'default' : 'wheel';
    switchMode(newMode)
  }

  fullscreen.onclick = function() {
    toggleFullscreen()
  }

  for(let i = 0; i < switchSlide.length; i++) {
    const el = switchSlide[i]

    el.onclick = function() {
      nextScene(parseInt(el.getAttribute('data-slide')))
    }
  }

  function getPresentationCoords(pos) {
    return {
      x: pos.x * presentation.width,
      y: pos.y * presentation.height
    }
  }

  function getCameraCoords(pos) {
    return {
      x: (pos.x - 0.1) * 1.1 * canvasElement.clientWidth,
      y: (pos.y - 0.1) * 1.1 * canvasElement.clientHeight
    }
  }

  function getWindowCoords(pos) {
    const presPos = getPresentationCoords(pos)
    return {
      x: presPos.x + presentationContainter.offsetLeft - target.clientWidth / 2.5,
      y: presPos.y + presentationContainter.offsetTop - target.clientHeight
    }
  }  

  const lastDrawCoords = {
    x: undefined,
    y: undefined
  }

  const lastCoords = {
    x: 0,
    y: 0
  }

  function clearPresentation() {
    presentationContext.clearRect(0, 0, presentation.width, presentation.height);
  }

  function clearVideo() {
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
  }

  function convertLandmarks(landmarks) {
    const convertedLandmarks = []
    for (const landmark of landmarks) {
      convertedLandmarks.push([
        landmark.x * 640, landmark.y * 480, landmark.z
      ])
    }
    return convertedLandmarks
  }

  const gestureHistory = {
    left: [],
    right: []
  }
  var currentGesture = 'none'
  var currentGestureCount = 0

  function hasGestureJustOccurred(gesture, containsIsEnough, hand) {
    const lastGestures = gestureHistory[hand].slice(-5)
    for(let i = 0; i < lastGestures.length; i++) {
      return containsIsEnough ? lastGestures[i].indexOf(gesture) !== -1 : lastGestures[i] === gesture
    }
    return false
  }

  drawPresentation()

  function nextScene(steps = 1) {
    if(!presentationReady)
      return;

    presentationReady = false

    setTimeout(() => {
      presentationReady = true
    }, 400)

    const stateImg = new Image
    stateImg.src = presentationDrawings.toDataURL()
    scenes[currentScene].currentState = stateImg
    
    stateImg.onload = function() {

      currentScene += steps

      // Cannot go beyond first or last slide
      if(!scenes[currentScene]) {
        currentScene = steps < 0 ? 0 : scenes.length - 1
        return;
      }

      if(steps > 0) {
        lastNextSceneSwitch = Date.now()
      }
      else {
        lastPrevSceneSwitch = Date.now()
      }

      switchTool('default')

      drawPresentation(true)
    }
  }

  var tools = [0, 'clear', 'default', 'pen', 'pipette', 'eraser']

  const wheelToolElements = document.querySelectorAll('[id^=wheel-tool-]');
  for(let i = 0; i < wheelToolElements.length; i++) {
    const tool = wheelToolElements[i]

    tool.onmouseover = function() {
      let currentTool = tool
      if(tool.id.includes('image')) {
        currentTool = document.querySelector('#' + tool.id.replace('-image', ''));
      }

      const wheelTools = document.querySelectorAll('.wheel-tool')
      for(let i = 0; i < wheelTools.length; i++) {
        const tool = wheelTools[i]
        tool.classList.remove('wheel-tool-active')
      }

      currentTool.classList.add('wheel-tool-active')

      const toolNum = parseInt(currentTool.id.replace(/wheel-tool-?/gi, ''))

      switchTool(tools[toolNum])
    }

    tool.onclick = function() {
      switchMode('default')
    }
    
  }

  var currentColor = 'red'
  var currentTool = 'none'
  var currentMode = 'default'
  var lastMode = 'default'
  var justSwitchedMode = false

  function canSwitchScene(next = true) {
    return Date.now() - (next ? lastPrevSceneSwitch : lastNextSceneSwitch) > 2000
  }

  function showLockOverlay() {
    lockCenter.classList.remove('hidden');

    setTimeout(() => {
      lockCenter.style.opacity = 0;

      setTimeout(() => {
        lockCenter.classList.add('hidden');
        lockCenter.style.opacity = 1;
      }, 1000)
    }, 3000)
  }

  function switchMode(mode = 'wheel') {
    if(justSwitchedMode) {
      return
    }
    lastMode = currentMode
    justSwitchedMode = true;
    setTimeout(() => {
      justSwitchedMode = false
    }, 1000)
    currentMode = mode
    switch(mode) {
      case 'wheel':
        wheelWrapper.style.display = 'flex'
        wheelGestureImage.setAttribute('src', './media/close-wheel.png')
        wheelGestureText.innerText = 'Auswahl schließen'
        break;
      case 'default':
        wheelGestureImage.setAttribute('src', './media/open-wheel.png')
        wheelGestureText.innerText = 'Werkzeug auswählen'
        wheelWrapper.style.display = 'none'
        if(currentTool === 'clear') {
          drawPresentation()
          switchTool('default')
        }

        if(lastMode === 'blocked') {
          document.querySelector('#locked').classList.add('hidden')
          document.querySelector('#unlocked').classList.remove('hidden')
          activeTool.classList.remove('hidden')
          wheelGesture.classList.remove('hidden')
          lockedGesturesText.innerText = 'Gesten sperren'
          showLockOverlay()
        }
        break;
      case 'blocked':
        activeTool.classList.add('hidden')
        wheelGesture.classList.add('hidden')
        document.querySelector('#locked').classList.remove('hidden')
        document.querySelector('#unlocked').classList.add('hidden')
        lockedGesturesText.innerText = 'Gesten freischalten'
        showLockOverlay()
    }
  }

  function useCurrentTool(landmarks) {

    const pos = landmarks[handParts.indexFinger.tip]
    const resPos = getPresentationCoords(pos)
    // const cameraCoords = getCameraCoords(pos)
    const windowPos = getWindowCoords(pos)

    if(currentMode === 'wheel') {
      target.setAttribute('src', 'media/default.png')
      lastDrawCoords.x = undefined
      lastDrawCoords.y = undefined

      const p1 = {...resPos}
      const p2 = {
        x: presentation.width / 2,
        y: presentation.height / 2
      }
      const angleDeg = Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI + 179;

      let tool

      if(angleDeg > 310 || angleDeg <= 22) {
        tool = 3
      }
      else if(angleDeg > 22 && angleDeg <= 94) {
        tool = 4
      }
      else if(angleDeg > 94 && angleDeg <= 166) {
        tool = 5
      }
      else if(angleDeg > 166 && angleDeg <= 238) {
        tool = 1
      }
      else {
        tool = 2
      }

      const wheelTools = document.querySelectorAll('.wheel-tool')
      for(let i = 0; i < wheelTools.length; i++) {
        const tool = wheelTools[i]
        tool.classList.remove('wheel-tool-active')
      }

      const wheelTool = document.querySelector('#wheel-tool-' + tool)
      wheelTool.classList.add('wheel-tool-active')

      switchTool(tools[tool])
    }
    else {
      switch(currentTool) {
        case 'eraser':
          drawingsContext.clearRect(resPos.x - 40, resPos.y - 40, 52, 52)
          break;
        case 'pen':
          target.setAttribute('src', 'media/pen.png')
          colorElement.style.backgroundColor = currentColor
          if(lastDrawCoords.x === undefined) {
            drawingsContext.fillStyle = currentColor;
            drawingsContext.fillRect(resPos.x - 21, resPos.y, 4, 4)
          }
          else {
            drawingsContext.beginPath();
            drawingsContext.strokeStyle = currentColor
            drawingsContext.lineWidth = 4
            drawingsContext.moveTo(lastDrawCoords.x - 21, lastDrawCoords.y)
            drawingsContext.lineTo(resPos.x - 21, resPos.y)
            drawingsContext.stroke()
          }
  
          lastDrawCoords.x = resPos.x
          lastDrawCoords.y = resPos.y
          break;
        case 'pipette':
          target.setAttribute('src', 'media/pipette.png')
          currentColor = getColorAt(drawingsContext, {
            x: resPos.x - 21,
            y: resPos.y
          })

          if(currentColor.endsWith('00')) {
            currentColor = getColorAt(presentationContext, {
              x: resPos.x - 21,
              y: resPos.y
            })
          }
          colorElement.style.backgroundColor = currentColor
          break;
        default:
          target.setAttribute('src', 'media/default.png')
          lastDrawCoords.x = undefined
          lastDrawCoords.y = undefined
          break;
      }
    }

    target.style.transform = 'translate(' + windowPos.x + 'px,' + windowPos.y + 'px)'
    lastCoords.x = resPos.x
    lastCoords.y = resPos.y
  }

  function switchTool(tool) {
    lastDrawCoords.x = undefined
    lastDrawCoords.y = undefined

    currentTool = tool
    // document.querySelectorAll('.tool').forEach(tool => {
    //   tool.classList.remove('active')
    // })
    // document.querySelector('[data-tool="' + tool + '"]').classList.add('active')

    if(currentTool == 'clear' || currentTool == 'eraser' || currentTool == 'default') {
      colorPicker.style.visibility = 'hidden'
    }
    else {
      colorElement.style.backgroundColor = currentColor
      colorPicker.style.visibility = 'visible'
    }
    
    target.setAttribute('src', 'media/' + tool + '.png')
    activeTool.setAttribute('data-tool', tool)
    if(tool === 'pen') {
      activeToolImage.style.transform = 'translateX(10px) translateY(-7px)'
    }
    else {
      activeToolImage.style.transform = 'none'
    }
    activeToolImage.setAttribute('src', 'media/' + tool + '.png')
  }

  var flatHandInitiated = false
  var flatHandStarted = {
    x: 0,
    y: 0
  }

  var doubleFlatHandInitiated = false
  var doubleFlatHandStarted = {
    left: {
      x: 0,
      y: 0
    },
    right: {
      x: 0,
      y: 0
    }
  }

  var fullscreenTimeout = false

  function toggleFullscreen() {
    if(fullscreenTimeout) {
      return;
    }

    fullscreenTimeout = true;

    setTimeout(() => fullscreenTimeout = false, 2000)

    if(detailsShown) {
      detailsShown = false
      videoRow.classList.add('hidden')
      navigation.classList.add('hidden')
      container.classList.add('no-details')
      resizePresentation()
    }
    else {
      detailsShown = true
      videoRow.classList.remove('hidden')
      navigation.classList.remove('hidden')
      container.classList.remove('no-details')
      resizePresentation()
    }
  }

  var justLocked = false;

  async function onResults(results) {

    canvasCtx.save()
    canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height);
    if (results.multiHandLandmarks && results.multiHandLandmarks.length) {
      const hands = results.multiHandLandmarks.length
      if(currentMode !== 'blocked') {
        target.style.opacity = 1
      }
      const gestures = {
        left: 'none',
        right: 'none'
      }
      for (let index = 0; index < hands; index++) {
        const landmarks = results.multiHandLandmarks[index]
        const handedness = results.multiHandedness[index]
        const hand = handedness.label.toLowerCase()

        const convertedLandmarks = convertLandmarks(landmarks)

        const gestureEstimations = gestureEstimator.estimate(
          convertedLandmarks, 8
        );

        let gesture = 'none'
        
        if(gestureEstimations.gestures.length > 0) {
        
          const gestureResult = gestureEstimations.gestures.reduce(
            (p, c) => { return (p.confidence > c.confidence) ? p : c; }
          );

          gesture = gestureResult.name
        }

        gestures[hand] = gesture;

        if(gesture !== currentGesture) {
          currentGestureCount = 0
        }
        currentGestureCount++

        const currentX = landmarks[handParts.indexFinger.base].x;
        const currentY = landmarks[handParts.indexFinger.base].y;


        if(hand === secondaryHand && currentMode !== 'blocked') {
          if(doubleFlatHandInitiated !== false && (Math.abs(doubleFlatHandStarted[hand].x - currentX) >= 0.05 || Math.abs(doubleFlatHandStarted[hand].y - currentY) >= 0.05)) {
            doubleFlatHandInitiated = false
          }
          switch(gesture) {
            // case 'toolOne':
            //   switchTool('pen')
            //   break;
            // case 'toolTwo':
            //   switchTool('pipette')
            //   break;
            // case 'toolThree':
            // case 'toolAltThree':
            //   switchTool('eraser')
            //   break;
            // case 'toolFour':
            //   switchTool('default')
            //   break;
            case 'flatHandRight':
              if(currentMode !== 'wheel' && hasGestureJustOccurred('flatHandLeft', false, hand) && canSwitchScene(false)) {
                nextScene(-1)
              }
              break;
            case 'flatHandLeft':
              if(currentMode !== 'wheel' && hasGestureJustOccurred('flatHandRight', false, hand) && canSwitchScene()) {
                nextScene()
              }
              break;
          }
        }
        else if(currentMode !== 'blocked') {
          if(doubleFlatHandInitiated !== false || (flatHandInitiated !== false && (Math.abs(flatHandStarted.x - currentX) >= 0.05 || Math.abs(flatHandStarted.y - currentY) >= 0.05))) {
            flatHandInitiated = false
          }

          if(doubleFlatHandInitiated !== false && (Math.abs(doubleFlatHandStarted[hand].x - currentX) >= 0.05 || Math.abs(doubleFlatHandStarted[hand].y - currentY) >= 0.05)) {
            doubleFlatHandInitiated = false
          }
          switch(gesture) {
            case 'none':
            // case 'pinch':
            // case 'flatHand':
            case 'point':
              useCurrentTool(landmarks)
              break;
            case 'flatHand':
              if(hands > 1) {
                break
              }
              if(currentMode === 'default') {
                if(!flatHandInitiated) {
                  flatHandInitiated = Date.now();
                  flatHandStarted.x = landmarks[handParts.indexFinger.base].x
                  flatHandStarted.y = landmarks[handParts.indexFinger.base].y
                }
                else if(Date.now() - flatHandInitiated >= 1000) {
                  const historyLength = gestureHistory[primaryHand].length;
                  const start = historyLength - 20;

                  if(gestureHistory[primaryHand].slice(start < 0 ? 0 : start, historyLength).filter(gesture => gesture === 'flatHand').length >= 15) {
                    switchMode('wheel')
                  }
                  flatHandInitiated = false;
                }
              }
              else {
                useCurrentTool(landmarks);
              }
              break;
            case 'fist':
              if(currentMode === 'wheel') {
                switchMode('default')
              }
              break;
            case 'flatHandRight':
              if(currentMode !== 'wheel' && hasGestureJustOccurred('flatHandLeft', false, hand) && !hasGestureJustOccurred('flatHand', false, hand) && canSwitchScene(false)) {
                nextScene(-1)
              }
              break;
            case 'flatHandLeft':
              if(currentMode !== 'wheel' && hasGestureJustOccurred('flatHandRight', false, hand) && !hasGestureJustOccurred('flatHand', false, hand) && canSwitchScene()) {
                nextScene()
              }
              break;
            // case 'thumbsUp':
            //   if(!detailsShown)
            //     break;
            //   detailsShown = false
            //   videoRow.classList.add('hidden')
            //   navigation.classList.add('hidden')
            //   container.classList.add('no-details')
            //   resizePresentation()
            //   break;
            // case 'thumbsDown':
            //   if(detailsShown)
            //     break;
            //   detailsShown = true
            //   videoRow.classList.remove('hidden')
            //   navigation.classList.remove('hidden')
            //   container.classList.remove('no-details')
            //   resizePresentation()
            //   break;
          }
        }

        currentGesture = gesture
        if(gestureHistory[hand].length > 100) {
          gestureHistory[hand].splice(0, 50)
        }
        gestureHistory[hand].push(gesture)

        const isPrimaryHand = hand === primaryHand;
        drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS, {color: isPrimaryHand ? '#00FF00' : 'cyan', lineWidth: 1,  });
        drawLandmarks(canvasCtx, landmarks, {color: isPrimaryHand ? '#FF0000' : '#0000FF', radius: 1});
      }
      canvasCtx.restore();

      if((currentMode === 'default' || currentMode === 'blocked') && hands >= 2) {

        const fullscreenOne = gestures.right === 'fullscreenOne' && gestures.left === 'fullscreenOne'
        const fullscreenTwo = (gestures.right === 'fullscreenOne' && gestures.left === 'fullscreenTwo') || (gestures.right === 'fullscreenTwo' && gestures.left === 'fullscreenOne')
        const fullscreenThree = gestures.right === 'fullscreenTwo' && gestures.left === 'fullscreenThree'

        const landmarks1 = results.multiHandLandmarks[0]
        const landmarks2 = results.multiHandLandmarks[1]
        let landmarksLeft = landmarks1
        let landmarksRight = landmarks2
        if(results.multiHandedness[1].label === 'Left') {
          landmarksLeft = landmarks2
          landmarksRight = landmarks1
        }

        if(gestures.right === 'flatHand' && gestures.left === 'flatHand') {
          if(!doubleFlatHandInitiated) {
            doubleFlatHandInitiated = Date.now();
            
            doubleFlatHandStarted.left.x = landmarksLeft[handParts.indexFinger.base].x
            doubleFlatHandStarted.left.y = landmarksLeft[handParts.indexFinger.base].y
            doubleFlatHandStarted.right.x = landmarksRight[handParts.indexFinger.base].x
            doubleFlatHandStarted.right.y = landmarksRight[handParts.indexFinger.base].y
          }
          else if(Date.now() - doubleFlatHandInitiated >= 1000) {
            if(gestureHistory.right.slice(-20).filter(gesture => gesture === 'flatHand').length >= 15 
              && gestureHistory.left.slice(-20).filter(gesture => gesture === 'flatHand').length >= 15 && !justLocked) {
              justLocked = true

              setTimeout(() => justLocked = false, 5000);
              const newMode = currentMode === 'blocked' ? 'default' : 'blocked';

              switchMode(newMode)
            }
            doubleFlatHandInitiated = false;
          }
        }
        else if(fullscreenOne || fullscreenTwo || fullscreenThree) {
          const leftIndexTip = landmarksLeft[handParts.indexFinger.tip]
          const rightIndexTip = landmarksRight[handParts.indexFinger.tip]
          const leftThumbTip = landmarksLeft[handParts.thumb.tip]
          const rightThumbTip = landmarksRight[handParts.thumb.tip]

          if((fullscreenOne && Math.abs(leftIndexTip.y - rightIndexTip.y) < 0.1 && Math.abs(leftThumbTip.y - rightThumbTip.y) < 0.1)
            || (fullscreenTwo && Math.abs(leftIndexTip.y - rightIndexTip.y) < 0.1)
            || (fullscreenThree && Math.abs(leftIndexTip.y - rightThumbTip.y) < 0.1 && Math.abs(rightIndexTip.y - leftThumbTip.y) < 0.1)){
            toggleFullscreen()
          }

          
        }
      }

    }
    else {
      target.style.opacity = 0

      canvasCtx.save();
      canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height);
      canvasCtx.restore();
    }
    // const objPrediction = await objDetectionModel.detect(canvasElement)
    
    // for(let i = 0; i < objPrediction.length; i++) {
    //   const prediction = objPrediction[i]
    //   canvasCtx.beginPath();
    //   canvasCtx.rect(...prediction.bbox);
    //   canvasCtx.lineWidth = 1;
    //   canvasCtx.strokeStyle = 'green';
    //   canvasCtx.fillStyle = 'green';
    //   canvasCtx.stroke();
    //   canvasCtx.fillText(
    //     prediction.score.toFixed(3) + ' ' + prediction.class, prediction.bbox[0],
    //     prediction.bbox[1] > 10 ? prediction.bbox[1] - 5 : 10);
    // }
  }

  const hands = new Hands({locateFile: (file) => {
    return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
  }});
  hands.setOptions({
    maxNumHands: 2,
    modelComplexity: 1,
    minDetectionConfidence: 0.5,
    minTrackingConfidence: 0.5,
    selfieMode: {
      flip_horinzontal: 1
    }
  });
  hands.onResults(onResults);

  const camera = new Camera(videoElement, {
    onFrame: async () => {
      await hands.send({image: videoElement});
    },
    width: 1280,
    height: 720
  });
  camera.start();
}
window.onresize = resizePresentation

