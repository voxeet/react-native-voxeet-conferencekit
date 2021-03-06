package com.voxeet.reactnative.events;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;

import org.greenrobot.eventbus.EventBus;

import java.util.ArrayList;
import java.util.List;

public class EventsManager {
    private final List<AbstractEventEmitter> eventEmitters;

    public EventsManager() {
        eventEmitters = new ArrayList<>();
    }

    public void init(@NonNull EventBus eventBus, @NonNull ReactApplicationContext reactContext) {
        eventEmitters.add(new ConferenceStatusEventEmitter(reactContext, eventBus));
        eventEmitters.add(new ConferenceUserEventEmitter(reactContext, eventBus));
        eventEmitters.add(new FilePresentationEventEmitter(reactContext, eventBus));
        eventEmitters.add(new VideoPresentationEventEmitter(reactContext, eventBus));
        eventEmitters.add(new VideoViewEventEmitter(reactContext, eventBus));
    }

    public void register() {
        for (AbstractEventEmitter eventEmitter : eventEmitters) {
            eventEmitter.register();
        }
    }
}
