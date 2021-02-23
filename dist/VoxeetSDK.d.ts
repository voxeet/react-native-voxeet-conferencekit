import ConferenceUser from './types/ConferenceUser';
import { CreateOptions, CreateResult } from './types/CreateConference';
import { JoinOptions, JoinResult } from './types/JoinConference';
export interface RefreshCallback {
    (): void;
}
export interface TokenRefreshCallback {
    (): Promise<string>;
}
export default class _VoxeetSDK {
    refreshAccessTokenCallback: RefreshCallback | null;
    /**
     * Initializes the SDK using the customer key and secret.
     * @param consumerKey Consumer Key
     * @param consumerSecret Consumer Secret
     */
    initialize(consumerKey: string, consumerSecret: string): Promise<boolean>;
    /**
     * Initializes the SDK with an access token that is provided by the customer backend communicating with Voxeet servers.
     * @param accessToken Access token
     * @param refreshToken Callback to get a new access token after it expires
     */
    initializeToken(accessToken: string | undefined, refreshToken: TokenRefreshCallback): Promise<boolean>;
    /**
     * Opens a new session.
     * @param userInfo Participant information
     */
    connect(userInfo: ConferenceUser): Promise<boolean>;
    /**
     * Closes the current session.
     */
    disconnect(): Promise<boolean>;
    /**
     * Creates a conference.
     * @param options Options to use to create the conference
     */
    create(options: CreateOptions): Promise<CreateResult>;
    /**
     * Joins the conference.
     * @param conferenceId Id of the conference to join
     * @param options Options to use to join the conference
     */
    join(conferenceId: string, options?: JoinOptions): Promise<JoinResult>;
    /**
     * Leaves the conference.
     */
    leave(): Promise<boolean>;
    /**
     * Invite a participant to the conference.
     * @param conferenceId Id of the conference to invite the participant to
     * @param participants List of participants to invite
     */
    invite(conferenceId: string, participants: ConferenceUser[]): Promise<boolean>;
    /**
     * Sends a broadcast message to the participants of the conference.
     * @param message Message to send to the other participants
     */
    sendBroadcastMessage(message: string): Promise<boolean>;
    /**
     * Sets the audio 3D.
     */
    setAudio3DEnabled(enable: boolean): void;
    /**
     * Is audio 3D enabled.
     */
    isAudio3DEnabled(): Promise<boolean>;
    /**
     * Sets the telecom mode.
     */
    setTelecomMode(enable: boolean): void;
    /**
     * Is telecom mode enabled.
     */
    isTelecomMode(): Promise<boolean>;
    /**
     * Sets if you want the UXKit to appear maximized or not.
     * @param maximized True to have the UXKit to appear maximized
     */
    appearMaximized(maximized: boolean): boolean;
    /**
     * Use the built in speaker by default.
     * @param enable True to use the built in speaker by default
     */
    defaultBuiltInSpeaker(enable: boolean): boolean;
    /**
     * Sets the video on by default.
     * @param enable True to turn on the video by default
     */
    defaultVideo(enable: boolean): boolean;
    /**
     * Activates or disable the screen auto lock. Android only.
     * @param activate True to activate the screen auto lock
     */
    screenAutoLock(activate: boolean): void;
    /** @deprecated */
    isUserLoggedIn(): Promise<boolean>;
    /**
     * Checks if a conference is awaiting. Android only.
     */
    checkForAwaitingConference(): Promise<boolean>;
    /** @deprecated Use join() instead. */
    startConference(conferenceId: string, participants: Array<ConferenceUser>): Promise<boolean>;
    /** @deprecated Use leave() instead. */
    stopConference(): Promise<boolean>;
    /** @deprecated Use connect() instead. */
    openSession(userInfo: ConferenceUser): Promise<boolean>;
    /** @deprecated Use disconnect() instead. */
    closeSession(): Promise<boolean>;
}
