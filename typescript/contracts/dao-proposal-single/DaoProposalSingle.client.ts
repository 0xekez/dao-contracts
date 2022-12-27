/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.19.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
import { Duration, PreProposeInfo, Admin, Binary, Threshold, PercentageThreshold, Decimal, Uint128, InstantiateMsg, ModuleInstantiateInfo, ExecuteMsg, CosmosMsgForEmpty, BankMsg, StakingMsg, DistributionMsg, IbcMsg, Timestamp, Uint64, WasmMsg, GovMsg, VoteOption, Vote, SingleChoiceProposeMsg, Coin, Empty, IbcTimeout, IbcTimeoutBlock, QueryMsg, MigrateMsg, Addr, Config, VoteResponse, VoteInfo, InfoResponse, ContractVersion, Expiration, Status, ProposalListResponse, ProposalResponse, SingleChoiceProposal, Votes, VoteListResponse, ProposalCreationPolicy, HooksResponse } from "./DaoProposalSingle.types";
export interface DaoProposalSingleReadOnlyInterface {
  contractAddress: string;
  config: () => Promise<Config>;
  proposal: ({
    proposalId
  }: {
    proposalId: number;
  }) => Promise<ProposalResponse>;
  listProposals: ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: number;
  }) => Promise<ProposalListResponse>;
  reverseProposals: ({
    limit,
    startBefore
  }: {
    limit?: number;
    startBefore?: number;
  }) => Promise<ProposalListResponse>;
  getVote: ({
    proposalId,
    voter
  }: {
    proposalId: number;
    voter: string;
  }) => Promise<VoteResponse>;
  listVotes: ({
    limit,
    proposalId,
    startAfter
  }: {
    limit?: number;
    proposalId: number;
    startAfter?: string;
  }) => Promise<VoteListResponse>;
  proposalCount: () => Promise<Uint64>;
  proposalCreationPolicy: () => Promise<ProposalCreationPolicy>;
  proposalHooks: () => Promise<HooksResponse>;
  voteHooks: () => Promise<HooksResponse>;
  dao: () => Promise<Addr>;
  info: () => Promise<InfoResponse>;
  nextProposalId: () => Promise<Uint64>;
}
export class DaoProposalSingleQueryClient implements DaoProposalSingleReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.config = this.config.bind(this);
    this.proposal = this.proposal.bind(this);
    this.listProposals = this.listProposals.bind(this);
    this.reverseProposals = this.reverseProposals.bind(this);
    this.getVote = this.getVote.bind(this);
    this.listVotes = this.listVotes.bind(this);
    this.proposalCount = this.proposalCount.bind(this);
    this.proposalCreationPolicy = this.proposalCreationPolicy.bind(this);
    this.proposalHooks = this.proposalHooks.bind(this);
    this.voteHooks = this.voteHooks.bind(this);
    this.dao = this.dao.bind(this);
    this.info = this.info.bind(this);
    this.nextProposalId = this.nextProposalId.bind(this);
  }

  config = async (): Promise<Config> => {
    return this.client.queryContractSmart(this.contractAddress, {
      config: {}
    });
  };
  proposal = async ({
    proposalId
  }: {
    proposalId: number;
  }): Promise<ProposalResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      proposal: {
        proposal_id: proposalId
      }
    });
  };
  listProposals = async ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: number;
  }): Promise<ProposalListResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      list_proposals: {
        limit,
        start_after: startAfter
      }
    });
  };
  reverseProposals = async ({
    limit,
    startBefore
  }: {
    limit?: number;
    startBefore?: number;
  }): Promise<ProposalListResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      reverse_proposals: {
        limit,
        start_before: startBefore
      }
    });
  };
  getVote = async ({
    proposalId,
    voter
  }: {
    proposalId: number;
    voter: string;
  }): Promise<VoteResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      get_vote: {
        proposal_id: proposalId,
        voter
      }
    });
  };
  listVotes = async ({
    limit,
    proposalId,
    startAfter
  }: {
    limit?: number;
    proposalId: number;
    startAfter?: string;
  }): Promise<VoteListResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      list_votes: {
        limit,
        proposal_id: proposalId,
        start_after: startAfter
      }
    });
  };
  proposalCount = async (): Promise<Uint64> => {
    return this.client.queryContractSmart(this.contractAddress, {
      proposal_count: {}
    });
  };
  proposalCreationPolicy = async (): Promise<ProposalCreationPolicy> => {
    return this.client.queryContractSmart(this.contractAddress, {
      proposal_creation_policy: {}
    });
  };
  proposalHooks = async (): Promise<HooksResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      proposal_hooks: {}
    });
  };
  voteHooks = async (): Promise<HooksResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      vote_hooks: {}
    });
  };
  dao = async (): Promise<Addr> => {
    return this.client.queryContractSmart(this.contractAddress, {
      dao: {}
    });
  };
  info = async (): Promise<InfoResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      info: {}
    });
  };
  nextProposalId = async (): Promise<Uint64> => {
    return this.client.queryContractSmart(this.contractAddress, {
      next_proposal_id: {}
    });
  };
}
export interface DaoProposalSingleInterface extends DaoProposalSingleReadOnlyInterface {
  contractAddress: string;
  sender: string;
  propose: ({
    description,
    msgs,
    proposer,
    title
  }: {
    description: string;
    msgs: CosmosMsgForEmpty[];
    proposer?: string;
    title: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  vote: ({
    proposalId,
    rationale,
    vote
  }: {
    proposalId: number;
    rationale?: string;
    vote: Vote;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  updateRationale: ({
    proposalId,
    rationale
  }: {
    proposalId: number;
    rationale?: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  execute: ({
    proposalId
  }: {
    proposalId: number;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  close: ({
    proposalId
  }: {
    proposalId: number;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  updateConfig: ({
    allowRevoting,
    closeProposalOnExecutionFailure,
    dao,
    maxVotingPeriod,
    minVotingPeriod,
    onlyMembersExecute,
    threshold
  }: {
    allowRevoting: boolean;
    closeProposalOnExecutionFailure: boolean;
    dao: string;
    maxVotingPeriod: Duration;
    minVotingPeriod?: Duration;
    onlyMembersExecute: boolean;
    threshold: Threshold;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  updatePreProposeInfo: ({
    info
  }: {
    info: PreProposeInfo;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  addProposalHook: ({
    address
  }: {
    address: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  removeProposalHook: ({
    address
  }: {
    address: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  addVoteHook: ({
    address
  }: {
    address: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  removeVoteHook: ({
    address
  }: {
    address: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
}
export class DaoProposalSingleClient extends DaoProposalSingleQueryClient implements DaoProposalSingleInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.propose = this.propose.bind(this);
    this.vote = this.vote.bind(this);
    this.updateRationale = this.updateRationale.bind(this);
    this.execute = this.execute.bind(this);
    this.close = this.close.bind(this);
    this.updateConfig = this.updateConfig.bind(this);
    this.updatePreProposeInfo = this.updatePreProposeInfo.bind(this);
    this.addProposalHook = this.addProposalHook.bind(this);
    this.removeProposalHook = this.removeProposalHook.bind(this);
    this.addVoteHook = this.addVoteHook.bind(this);
    this.removeVoteHook = this.removeVoteHook.bind(this);
  }

  propose = async ({
    description,
    msgs,
    proposer,
    title
  }: {
    description: string;
    msgs: CosmosMsgForEmpty[];
    proposer?: string;
    title: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      propose: {
        description,
        msgs,
        proposer,
        title
      }
    }, fee, memo, funds);
  };
  vote = async ({
    proposalId,
    rationale,
    vote
  }: {
    proposalId: number;
    rationale?: string;
    vote: Vote;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      vote: {
        proposal_id: proposalId,
        rationale,
        vote
      }
    }, fee, memo, funds);
  };
  updateRationale = async ({
    proposalId,
    rationale
  }: {
    proposalId: number;
    rationale?: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_rationale: {
        proposal_id: proposalId,
        rationale
      }
    }, fee, memo, funds);
  };
  execute = async ({
    proposalId
  }: {
    proposalId: number;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      execute: {
        proposal_id: proposalId
      }
    }, fee, memo, funds);
  };
  close = async ({
    proposalId
  }: {
    proposalId: number;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      close: {
        proposal_id: proposalId
      }
    }, fee, memo, funds);
  };
  updateConfig = async ({
    allowRevoting,
    closeProposalOnExecutionFailure,
    dao,
    maxVotingPeriod,
    minVotingPeriod,
    onlyMembersExecute,
    threshold
  }: {
    allowRevoting: boolean;
    closeProposalOnExecutionFailure: boolean;
    dao: string;
    maxVotingPeriod: Duration;
    minVotingPeriod?: Duration;
    onlyMembersExecute: boolean;
    threshold: Threshold;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_config: {
        allow_revoting: allowRevoting,
        close_proposal_on_execution_failure: closeProposalOnExecutionFailure,
        dao,
        max_voting_period: maxVotingPeriod,
        min_voting_period: minVotingPeriod,
        only_members_execute: onlyMembersExecute,
        threshold
      }
    }, fee, memo, funds);
  };
  updatePreProposeInfo = async ({
    info
  }: {
    info: PreProposeInfo;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_pre_propose_info: {
        info
      }
    }, fee, memo, funds);
  };
  addProposalHook = async ({
    address
  }: {
    address: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      add_proposal_hook: {
        address
      }
    }, fee, memo, funds);
  };
  removeProposalHook = async ({
    address
  }: {
    address: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      remove_proposal_hook: {
        address
      }
    }, fee, memo, funds);
  };
  addVoteHook = async ({
    address
  }: {
    address: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      add_vote_hook: {
        address
      }
    }, fee, memo, funds);
  };
  removeVoteHook = async ({
    address
  }: {
    address: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      remove_vote_hook: {
        address
      }
    }, fee, memo, funds);
  };
}