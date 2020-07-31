import React from "react";
import "../css/App.css";

function SubmissionModal(props) {
  return (
    <div
      class="modal"
      tabindex="-1"
      role="dialog"
      id="submission-modal"
      aria-labelledby="exampleModalLongTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header submission-header">
            <h5 class="modal-title">
              Submission Blurb that will be the chapter title
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <small class="text-muted submitted-username">by username</small>
          <div class="modal-body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In erat
              felis, posuere vitae tincidunt ac, mollis bibendum dui. In a
              fringilla nunc. Quisque sit amet purus non neque vulputate gravida
              vitae at nibh. Interdum et malesuada fames ac ante ipsum primis in
              faucibus. Aenean maximus auctor tortor non pulvinar. Ut facilisis
              ornare turpis, sit amet porta dolor ornare a. Pellentesque non
              venenatis orci, eget commodo justo. Cras vestibulum, velit eget
              dictum dapibus, nibh leo porta nisi, nec maximus mi nisl quis
              diam. Etiam fermentum dignissim dapibus. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Aenean eu tincidunt risus, id placerat elit. Cras
              scelerisque efficitur dapibus. Donec ac feugiat orci. Etiam dolor
              libero, eleifend sed rutrum at, maximus vitae augue. Donec
              eleifend vel dui non cursus. Mauris feugiat vestibulum congue.
              Etiam sit amet purus a nisi sagittis condimentum eget ac quam.
              Donec sed cursus lectus, id lobortis lectus. Phasellus a purus
              interdum, cursus mi at, egestas urna. Donec eleifend, mauris quis
              molestie aliquet, neque enim semper eros, nec tempus lectus justo
              eu dui. Sed a tellus quis lorem gravida ornare. Nulla ultricies in
              nulla ac aliquet. Fusce pellentesque ac neque ac vehicula.
              Suspendisse suscipit quam quis placerat placerat. Nam dapibus
              faucibus elit et aliquet. Pellentesque leo elit, auctor imperdiet
              lacinia ac, feugiat eu eros. Nulla elementum dignissim nulla, et
              rutrum elit blandit vel. Vestibulum placerat venenatis risus vel
              porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. In erat felis, posuere vitae tincidunt ac, mollis bibendum
              dui. In a fringilla nunc. Quisque sit amet purus non neque
              vulputate gravida vitae at nibh. Interdum et malesuada fames ac
              ante ipsum primis in faucibus. Aenean maximus auctor tortor non
              pulvinar. Ut facilisis ornare turpis, sit amet porta dolor ornare
              a. Pellentesque non venenatis orci, eget commodo justo. Cras
              vestibulum, velit eget dictum dapibus, nibh leo porta nisi, nec
              maximus mi nisl quis diam. Etiam fermentum dignissim dapibus.
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Aenean eu tincidunt risus, id
              placerat elit. Cras scelerisque efficitur dapibus. Donec ac
              feugiat orci. Etiam dolor libero, eleifend sed rutrum at, maximus
              vitae augue. Donec eleifend vel dui non cursus. Mauris feugiat
              vestibulum congue. Etiam sit amet purus a nisi sagittis
              condimentum eget ac quam. Donec sed cursus lectus, id lobortis
              lectus. Phasellus a purus interdum, cursus mi at, egestas urna.
              Donec eleifend, mauris quis molestie aliquet, neque enim semper
              eros, nec tempus lectus justo eu dui. Sed a tellus quis lorem
              gravida ornare. Nulla ultricies in nulla ac aliquet. Fusce
              pellentesque ac neque ac vehicula. Suspendisse suscipit quam quis
              placerat placerat. Nam dapibus faucibus elit et aliquet.
              Pellentesque leo elit, auctor imperdiet lacinia ac, feugiat eu
              eros. Nulla elementum dignissim nulla, et rutrum elit blandit vel.
              Vestibulum placerat venenatis risus vel porttitor Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. In erat felis,
              posuere vitae tincidunt ac, mollis bibendum dui. In a fringilla
              nunc. Quisque sit amet purus non neque vulputate gravida vitae at
              nibh. Interdum et malesuada fames ac ante ipsum primis in
              faucibus. Aenean maximus auctor tortor non pulvinar. Ut facilisis
              ornare turpis, sit amet porta dolor ornare a. Pellentesque non
              venenatis orci, eget commodo justo. Cras vestibulum, velit eget
              dictum dapibus, nibh leo porta nisi, nec maximus mi nisl quis
              diam. Etiam fermentum dignissim dapibus. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Aenean eu tincidunt risus, id placerat elit. Cras
              scelerisque efficitur dapibus. Donec ac feugiat orci. Etiam dolor
              libero, eleifend sed rutrum at, maximus vitae augue. Donec
              eleifend vel dui non cursus. Mauris feugiat vestibulum congue.
              Etiam sit amet purus a nisi sagittis condimentum eget ac quam.
              Donec sed cursus lectus, id lobortis lectus. Phasellus a purus
              interdum, cursus mi at, egestas urna. Donec eleifend, mauris quis
              molestie aliquet, neque enim semper eros, nec tempus lectus justo
              eu dui. Sed a tellus quis lorem gravida ornare. Nulla ultricies in
              nulla ac aliquet. Fusce pellentesque ac neque ac vehicula.
              Suspendisse suscipit quam quis placerat placerat. Nam dapibus
              faucibus elit et aliquet. Pellentesque leo elit, auctor imperdiet
              lacinia ac, feugiat eu eros. Nulla elementum dignissim nulla, et
              rutrum elit blandit vel. Vestibulum placerat venenatis risus vel
              porttitor
            </p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              disabled
              data-toggle="tooltip"
              data-placement="top"
              title="Only the Narrator can add this submission"
            >
              Add to Story
            </button>

            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubmissionModal;
