"use strict";
import * as Alexa from "ask-sdk";

const skillBuilder = Alexa.SkillBuilders.custom();
const lines = [
  { name: "Mark", line: "Hello how are you?"},
  { name: "Gregor", line: "Fine thanks, how are you?"},
  { name: "Jane", line: "What about me?"}
]
const welcomeMessage = "Hello and welcome to Line Learner";
const helpMessage = `Say learn to start learning`;




/* INTENT HANDLERS */
const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === `LaunchRequest`;
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(welcomeMessage)
      .reprompt(helpMessage)
      .getResponse();
  },
};
