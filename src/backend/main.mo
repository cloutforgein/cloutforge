import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Time "mo:core/Time";
import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import Order "mo:core/Order";
import Principal "mo:core/Principal";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  type SubmissionId = Nat;

  type Submission = {
    id : SubmissionId;
    companyName : Text;
    department : Text;
    timestamp : Time.Time;
    submittedBy : Principal;
  };

  module Submission {
    public func compareByTimestamp(a : Submission, b : Submission) : Order.Order {
      Nat.compare(a.id, b.id);
    };
  };

  let submissions = Map.empty<SubmissionId, Submission>();
  var nextId = 0;

  public shared ({ caller }) func submitLead(companyName : Text, department : Text) : async SubmissionId {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can submit leads");
    };

    let submission : Submission = {
      id = nextId;
      companyName;
      department;
      timestamp = Time.now();
      submittedBy = caller;
    };

    submissions.add(nextId, submission);
    nextId += 1;
    submission.id;
  };

  public query ({ caller }) func getAllSubmissions() : async [Submission] {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can view all submissions");
    };

    submissions.values().toArray().sort(Submission.compareByTimestamp);
  };
};
